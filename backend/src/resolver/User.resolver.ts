import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../entity/User.entity";
import {
  TemplateResponse,
  ResponseTimestamp,
} from "../response/Template.response";
import { TemplateResolver } from "./Template.resolver";
import argon2 from "argon2";
import { MyContext } from "../types";
import { ApolloError, UserInputError } from "apollo-server-express";
import Joi, { ValidationOptions } from "joi";
import { DuplicatedError } from "../response/CustomError.response";
import { COOKIE_NAME } from "../constants";

// Define Joi validate option
const validateOptions: ValidationOptions = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
  noDefaults: true,
};

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
class UserResponse extends TemplateResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}

// Initialize from abstract template class
const UserTemplateResolver = TemplateResolver("User");

@Resolver()
export class UserResolver extends UserTemplateResolver {
  // Inject Repo
  @InjectRepository(User)
  private userRepository: Repository<User>;

  // **Query current user on cookie function** //
  @Query(() => User)
  @ResponseTimestamp()
  async me(@Ctx() { req }: MyContext) {
    console.log("Session:", req.session);
    if (!req.session.userId) {
      throw new ApolloError(
        "Session Error: User session expired or not exist",
        "UNAUTHENTICATED"
      );
    }
    const user = await this.userRepository.findOne(req.session.userId);
    return user;
  }

  // **Register function** //
  @Mutation(() => UserResponse)
  @ResponseTimestamp()
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    // Joi Validation Schema
    const schema = Joi.object({
      username: Joi.string().min(3).max(30).required(),
      password: Joi.string().min(3).required(),
    });

    const { error } = schema.validate(options, validateOptions);
    console.log(error);
    if (error) {
      throw new UserInputError(
        "Validation Error: Failed to register a user due to validation errors",
        {
          fieldErrors: error.details,
        }
      );
    }

    // Register a user
    let hashedPassword = await argon2.hash(options.password);
    const savedUser = {
      username: options.username,
      password: hashedPassword,
    };
    let user: User | undefined;
    try {
      user = await this.userRepository.save(savedUser);
    } catch (error) {
      // Check duplicated username
      if (error.code === "23505") {
        throw new DuplicatedError("Database Error: Failed to register a user", {
          fieldErrors: [
            {
              message: "username has already been taken",
              path: ["username"],
            },
          ],
        });
      }
    }
    // Save user cookie upon successful register
    if (user) {
      req.session.userId = user.id;
    }
    return { user };
  }

  // **Login function** //
  @Mutation(() => UserResponse)
  @ResponseTimestamp()
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await this.userRepository.findOne({
      username: options.username,
    });
    // Verify if username exists
    if (!user) {
      throw new UserInputError(
        "Validation Error: Failed to login due to validation errors",
        {
          fieldErrors: [
            {
              message: "username does not exist",
            },
          ],
        }
      );
    }
    // Verify if password matches
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      throw new UserInputError(
        "Validation Error: Failed to login due to validation errors",
        {
          fieldErrors: [
            {
              message: "password does not match",
            },
          ],
        }
      );
    }
    // Save user's cookie upon successful login
    req.session.userId = user.id;
    return { user };
  }

  // **Logout function** //
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        // Clear Cookie via Response (Set-Cookie)
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}

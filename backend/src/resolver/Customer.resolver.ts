/* Joi Import */
import JoiImport from "joi";
import JoiDate from "@joi/date";
const Joi = JoiImport.extend(JoiDate);
/* Other Impots */
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
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
import { Customer } from "../entity/Customer.entity";
import {
  ResponseTimestamp,
  TemplateResponse,
} from "../response/Template.response";
import { TemplateResolver } from "./Template.resolver";
import { validateOptions } from "../utils/validateOptions";
import { ApolloError, UserInputError } from "apollo-server-express";
import { MyContext } from "../types";
import { User } from "../entity/User.entity";
import { CreditHistory } from "../entity/CreditHistory.entity";

@InputType()
class CustomerInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  dateOfBirth: string;
}

@InputType()
class CustomerScoreInput {
  @Field()
  customerId: number;

  @Field()
  negScore: number;

  @Field()
  posScore: number;
}

// Joi Validation Schema
const registerCustomerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dateOfBirth: Joi.date().format("DD-MM-YYYY"),
});

@ObjectType()
class CustomerResponse extends TemplateResponse {
  @Field(() => Customer, { nullable: true })
  customer?: Customer;
}

// Initialize from Abstract Template class
const CustomerTemplateResolver = TemplateResolver("Customer");

@Resolver(() => Customer)
export default class CustomerResolver extends CustomerTemplateResolver {
  // Inject Repo
  @InjectRepository(Customer)
  private customerRepository: Repository<Customer>;

  @InjectRepository(User)
  private userRepository: Repository<User>;

  @InjectRepository(CreditHistory)
  private creditHistoryRepository: Repository<CreditHistory>;

  // **Create a new Customer ** //
  @Mutation(() => CustomerResponse)
  @ResponseTimestamp()
  async registerCustomer(
    @Arg("options") options: CustomerInput
  ): Promise<CustomerResponse> {
    const { error } = registerCustomerSchema.validate(options, validateOptions);
    // Validate customer info input
    if (error) {
      throw new UserInputError(
        "Validation Error: failed to register a new Customer due to validation errors",
        {
          validationErrors: error.details,
        }
      );
    }
    // Parse Date to suitable format
    let dob: Date = dayjs(options.dateOfBirth, "DD-MM-YYYY").toDate();
    // console.log(dob);
    // Register a Customer
    let savedCustomer = {
      firstName: options.firstName,
      lastName: options.lastName,
      dateOfBirth: dob,
    };
    const customer = await this.customerRepository.save(savedCustomer);
    return { customer };
  }

  // ** record Customer Score ** //
  @Mutation(() => Boolean)
  async recordCustomerScore(
    @Arg("options") options: CustomerScoreInput,
    @Ctx() { req }: MyContext
  ) {
    if (!req.session.userId) {
      throw new ApolloError(
        "Session Error: User session expired or not exist",
        "UNAUTHENTICATED"
      );
    }
    // Find User by sessions's qid
    const user = await this.userRepository.findOne(req.session.userId);
    if (!user) {
      throw new ApolloError(
        "Validation Error: failed to record customer score due to validation errors",
        "UNAUTHENTICATED",
        {
          validationErrors: {
            message: "user does not exist (could be wrong session)",
            path: [""],
          },
        }
      );
    }
    // Find Customer by input's customerID
    const customer = await this.customerRepository.findOne(options.customerId);
    if (!customer) {
      throw new ApolloError(
        "Validation Error: failed to record customer score due to validation errors",
        "BAD_USER_INPUT",
        {
          validationErrors: {
            message: "customer does not exist",
            path: ["id"],
          },
        }
      );
    }
    // Record Credit History
    let creditHistory = {
      negScore: options.negScore,
      posScore: options.posScore,
      customer,
      user,
    };
    await this.creditHistoryRepository.save(creditHistory);
    return true;
  }

  @Query(() => Customer)
  async customer(@Arg("id") id: number) {
    const customer = await this.customerRepository.findOne({
      relations: ["creditHistoryList"],
      where: { id: id },
    });
    if (!customer) {
      throw new ApolloError(
        "Validation Error: fail to get a customer due to validation errrors",
        "BAD_USER_INPUT"
      );
    }
    return customer;
  }

  @Query(() => [Customer])
  async customers(): Promise<Customer[]> {
    const customers = await this.customerRepository.find({
      relations: ["creditHistoryList"],
    });
    console.log("Fetch length: ", customers.length);
    return customers;
  }

  // @FieldResolver(() => [CreditHistory])
  // async creditHistoryList(@Root() customer: Customer) {
  //   const customerId = customer.id;
  //   console.log("FieldResolver id:", customerId);
  //   const creditHistoryList = await this.creditHistoryRepository.find({
  //     customer: { id: customerId },
  //   });
  //   if (creditHistoryList) {
  //     return creditHistoryList;
  //   }
  //   return null;
  // }
}

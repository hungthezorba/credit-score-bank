import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User.entity";

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {}

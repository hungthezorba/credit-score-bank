import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Customer } from "../entity/Customer.entity";

@Service()
@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {}

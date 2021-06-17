import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { Customer } from "./Customer.entity";
import { TemplateEntity } from "./Template.entity";
import { User } from "./User.entity";

@ObjectType()
@Entity()
export class CreditHistory extends TemplateEntity {
  @Field()
  @Column({ type: "float", nullable: true })
  creditScore!: number;

  // **RELATIONSHIPS** //
  @Field(() => Customer)
  @ManyToOne(() => Customer, (customer) => customer.creditHistoryList, {
    nullable: false,
  })
  customer: Customer;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.creditHistoryList)
  user: User;
}

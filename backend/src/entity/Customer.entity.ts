import { Entity, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { TemplateEntity } from "./Template.entity";
import { CreditHistory } from "./CreditHistory.entity";

@ObjectType()
@Entity()
export class Customer extends TemplateEntity {
  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field(() => String)
  @Column({ type: "date", nullable: true })
  dateOfBirth: Date;

  @OneToMany(() => CreditHistory, (creditHistory) => creditHistory.customer)
  creditHistoryList: CreditHistory[];

  // createdAt, updatedAt ...
}

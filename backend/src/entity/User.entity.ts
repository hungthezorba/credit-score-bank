import { Entity, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { TemplateEntity } from "./Template.entity";
import { CreditHistory } from "./CreditHistory.entity";

@ObjectType()
@Entity()
export class User extends TemplateEntity {
  @Field(() => String)
  @Column({ type: "text", unique: true })
  username!: string;

  @Column({ type: "text" })
  password!: string;

  @OneToMany(() => CreditHistory, (creditHistory) => creditHistory.user)
  creditHistoryList: CreditHistory[];
}

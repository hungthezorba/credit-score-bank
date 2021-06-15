import { Entity, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { TemplateEntity } from "./Template.entity";

@ObjectType()
@Entity()
export class Customer extends TemplateEntity {
  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field(() => Date)
  @Column({ type: "date", nullable: true })
  dateOfBirth: Date;

  @Field()
  @Column({ type: "float", nullable: true })
  creditScore: number;
}

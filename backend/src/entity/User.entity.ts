import { Entity, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { TemplateEntity } from "./Template.entity";

@ObjectType()
@Entity()
export class User extends TemplateEntity {
	@Field(() => String)
	@Column({ type: "text", unique: true })
	username!: string;

	@Column({ type: "text" })
	password!: string;
}

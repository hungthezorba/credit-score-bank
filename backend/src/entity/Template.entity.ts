import { Field, ObjectType } from "type-graphql";
import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@ObjectType({ isAbstract: true })
export abstract class TemplateEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}

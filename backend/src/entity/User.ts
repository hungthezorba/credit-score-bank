import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class User {
	@Field(() => Number)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column({ type: "text", unique: true })
	username!: string;

	@Field(() => String)
	@Column()
	firstName: string;

	@Field(() => String)
	@Column()
	lastName: string;

	@Field(() => String)
	@Column()
	age: number;
}

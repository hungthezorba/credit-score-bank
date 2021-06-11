import { ConnectionOptions } from "typeorm";
import path from "path";
import { __prod__ } from "./constants";
import Dotenv from "dotenv";
Dotenv.config();

const config: ConnectionOptions = {
	type: "postgres",
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	synchronize: false,
	logging: !__prod__,
	entities: [path.join(__dirname, "./entity/*.{ts,js}")],
	migrations: [path.join(__dirname, "./migration/*.{ts,js}")],
	subscribers: [path.join(__dirname, "./subscriber/*.{ts,js}")],
	cli: {
		entitiesDir: "src/entity",
		migrationsDir: "src/migration",
		subscribersDir: "src/subscriber",
	},
};

export = config;

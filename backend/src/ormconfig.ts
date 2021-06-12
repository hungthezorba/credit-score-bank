import { ConnectionOptions } from "typeorm";
import path from "path";
import { __prod__ } from "./constants";
import Dotenv from "dotenv";
Dotenv.config();

const config: ConnectionOptions = {
	type: "postgres",
	url: process.env.POSTGRES_URL,
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

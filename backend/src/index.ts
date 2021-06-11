import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { User } from "./entity/User";
import Dotenv from "dotenv";
import cors from "cors";
import config from "./ormconfig";
import { HelloResolver } from "./resolvers/hello";

(async () => {
	// Execute env variables
	Dotenv.config();
	// Setup connection
	const connection = await createConnection(config);
	// Auto-run migration
	await connection.runMigrations();

	/** Define a new User entity //
	const user = new User();
	user.firstName = "Timber";
	user.lastName = "Saw";
	user.age = 25;
	await connection.manager.save(user);
  
	console.log("Saved a new user with id: " + user.id);
	console.log("Inserting a new user into the database...");
  */
	connection.manager.save;

	console.log("Loading users from the database...");
	const users = await connection.manager.find(User);
	console.log("Loaded users: ", users);

	// Initialize Express Server //
	const app = express();
	// Allow CORS from port 3000
	app.use(
		cors({
			origin: "http://localhost:3000",
			credentials: true,
		})
	);
	// Initialize Apollo back-end server //
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver],
			validate: false,
		}),
		context: ({ req, res }) => ({ em: connection.manager, req, res }),
	});
	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	const port = process.env.PORT || 4000;
	app.listen(port, () => {
		console.log(`GraphQL-Express server is running on localhost:${port}`);
	});
})().catch((error) => {
	console.error(error);
});

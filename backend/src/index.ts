import "reflect-metadata";
import { Connection, createConnection, useContainer } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { Container } from "typeorm-typedi-extensions";
import { User } from "./entity/User.entity";
import "dotenv-safe/config";
import cors from "cors";
import config from "./ormconfig";
import { HelloResolver } from "./resolver/Hello.resolver";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __prod__ } from "./constants";
import { UserResolver } from "./resolver/User.resolver";

// *** MAIN Node.js Application *** //
(async () => {
  // Declare reconnection attributes
  let maxReconnections = 20;
  let connected = false;
  let connection: Connection;

  // Use IoC Container from TypeDI
  useContainer(Container);
  // Setup connection & auto-reconnect every 5s
  while (!connected && maxReconnections > 0) {
    try {
      connection = await createConnection(config);
      connected = true;
    } catch (error) {
      console.log("Reconnecting in 5 seconds...");
      await sleep(5000);
      maxReconnections -= 1;
    }
  }
  // If it still fails after 20 connections => Issue failed error
  if (!connected) {
    throw new Error("Connection to PostgreSQL database failed!");
  }
  // Auto-run migration for TypeORM-PostgreSQL
  await connection!.runMigrations();

  // Sample code to load users from database
  console.log("Loading users from the database...");
  const users = await connection!.manager.find(User);
  console.log("Loaded users: ", users);

  // Initialize Express Server //
  const app = express();

  // Connect to Redis
  let RedisStore = connectRedis(session);
  let redisClient = redis.createClient();

  // Inform Express in terms of Proxy (NGINX)
  app.set("trust proxy", 1);
  // Allow CORS from port 3000
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN as string,
      credentials: true,
    })
  );

  // Set-Cookie session and store in Redis via connector
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        url: process.env.REDIS_URL as string,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365.25 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET as string,
      resave: false, //
    })
  );

  // Initialize Apollo back-end server //
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
      container: Container,
    }),
    context: ({ req, res }) => ({ em: connection.manager, req, res }),
  });
  // Apply Express and Cors
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  // Enable Express Server
  const port = process.env.PORT as string;
  app.listen(port, () => {
    console.log(`GraphQL-Express server is running on localhost:${port}`);
  });
})().catch((error) => {
  console.error(error);
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

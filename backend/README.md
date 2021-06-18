# Credit Score Bank Project

<p align="center"><img src="https://media1.giphy.com/media/nvb74G5HEcQhoah9Hv/200.gif"/></p>
<p align="center"><i>GraphQL-Express-Node Stack</I></p>
<hr/>

## I. Project Run Setup

Steps to run this project:

1. Create a database name `credit-score` in PostgreSQL server
2. Run `npm run watch` command to transcompile immediately (hot-reload) TS files
3. Run `npm run dev` command to execute Express GraphQL server (default Port 4000; default URL: http://localhost:4000/graphql)

- Option #1: Setup database settings inside `src/ormconfig.ts` file
  <br/>
- Option #2: Run `npm run typeorm:migrate -n [filename]` to generate new migration file when there's a change in Database schema -> Run `npm run typeorm:run` to execute latest migration according to Timestamp

## II. Container-based Setup

</br>

Services integrated in the system:

- Redis - _port: 6739_
- PostgreSQL - _port: 5432_
- Node.js App - _port: 4000_

There are 2 modes that developers can work on in dockerized/container environment:

- Development
- Production

Since there are multiple services communicated with each other, we'll utilize Docker-compose to 'compose' a unified work experience for contributors: (_Remember to install Docker first!_)

**For Development**

</br>

1. Run `docker-compose -f docker-compose.dev.yml` to start development environment for all services -> Enable GraphQL playground at port 4000

2. Run `docker-compose down` to close all containers composed in a single network after finishing development stage

**For Production**

1. Run `docker-compose up` to start production environment (bundling, minified production resources) for all services -> Disable GraphQL playground at port 4000

2. Run `docker-compose down` to close all containers composed in a single network after finishing production stage

## III. GraphQL Documentation

<br/>
<p align="center"><img width="1280" height="720" src="https://i.imgur.com/eefj08e.png"/></p>
<p align="center"><i>GraphQL Playground</I></p>
<p align="center"><i>Development ONLY (http://localhost:4000/graphql)</I></p>
<br/>

**Notation & Instruction**

- <b><span style="color: white">White: </span></b> GraphQL operations (queries/mutations) in an interactive playground with actual responses & requests

- <b><span style="color: purple">Purple: </span></b> GraphQL variables for resolvers/functions with params (JSON format)

- <b><span style="color: #8b0000">Red: </span></b> GraphQL Mutations/Queries (above) listed in the `DOCS` section

- <b><span style="color: #249225">Green: </span></b> GraphQL resolvers with parameters, return type & schema

- <b><span style="color: #e2d86f">Yellow: </span></b> GraphQL resolvers return schema

- <b><span style="color: #00008b">Blue: </span></b> Optional Retrieved attributes (_at least one_) in schema, in addition, you can also choose the right arrow ➡️ to expand for more schemas and their attributes

- <b><span style="color: #FFB6C1">Blue: </span></b> Resolvers arguments and their schemas (➡️ expand for details)

- <b><i><span style="color: gray">Bonus: </span></i></b> there's also a `SCHEMA` section to explore existing schemas in resolvers and arguments in the GraphQL server

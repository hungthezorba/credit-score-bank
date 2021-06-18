# Credit Score Bank Project

<p align="center"><img src="https://media1.giphy.com/media/nvb74G5HEcQhoah9Hv/200.gif"/></p>
<p align="center"><i>GraphQL-Express-Node Stack</I></p>
<hr/>

## I. Run Set-up

Steps to run this project:

1. Create a database name `credit-score` in PostgreSQL server
2. Run `npm run watch` command to transcompile immediately (hot-reload) TS files
3. Run `npm run dev` command to execute Express GraphQL server (default Port 4000; default URL: http://localhost:4000/graphql)

- Option #1: Setup database settings inside `src/ormconfig.ts` file
  <br/>
- Option #2: Run `npm run typeorm:migrate -n [filename]` to generate new migration file when there's a change in Database schema -> Run `npm run typeorm:run` to execute latest migration according to Timestamp

## II. Container-based Set-up

Services integrated in the system:

- Redis - _port: 6739_
- PostgreSQL - _port: 5432_
- Node.js App - _port: 4000_

There are 2 modes that developers can work on in dockerized/container environment:

- Development
- Production

Since there are multiple services communicated with each other, we'll utilize Docker-compose to 'compose' a unified work experience for contributors: (_Remember to install Docker first!_)

**For Development**

1. Run `docker-compose -f docker-compose.dev.yml` to start development environment for all services -> Enable GraphQL playground at port 4000

**For Production**

1. Run `docker-compose -f docker-compose.dev.yml` to start production environment (bundling, minified production resources) for all services -> Disable GraphQL playground at port 4000

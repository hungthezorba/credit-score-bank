# Credit Score Bank Project

Steps to run this project:

1. Create a database name `credit-score` in PostgreSQL server
2. Run `npm run watch` command to transcompile immediately (hot-reload) TS files
3. Run `npm run dev` command to execute Express GraphQL server (default Port 4000; default Url: http://localhost:4000/graphql)

(Optional #1): Run `npm i` first to install necessary dependencies
<br/>
(Optional #2): Setup database settings inside `src/ormconfig.ts` file
<br/>
(Optional #3): Run `npm run typeorm:migrate -n [filename]` to generate new migration file when there's a change in Database schema -> Run `npm run typeorm:run` to execute latest migration according to Timestamp

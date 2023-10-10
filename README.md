# Node-backend exercise

## Getting started
After running `npm install` on the project, create a .env file in this directory with two entries: "PORT" and "PG_CONNECTION_STRING".
Example:
```
PG_CONNECTION_STRING=postgres://postgres:secretpassword@localhost:7778/nextudatabase
PORT=4000
```

After creating the .env, you will need to run the migrations. For doing so, run `npx knex migrate:latest` in your terminal

The only file that needs to be modified is user.js.

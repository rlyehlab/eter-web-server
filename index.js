const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();
const env = {
  "PORT": process.env.PORT || 3000,
  "DATABASE_URL": process.env.DATABASE_URL || 'localhost',
  "DB_NAME": process.env.DB_NAME,
  "USER": process.env.USER || '',
  "PASS": process.env.PASS || '',
  "SCHEMA": process.env.SCHEMA
};

if(Object.entries(env).some(([k,v])=>{
    console.log(k, v);
    return v === undefined;
  })
) {
  throw new Error("One of the enviroment values wasn't provided");
}

const USER_PASS = PASS ? [USER, PASS].join(":") : USER;
const DB_URL = USER_PASS ? [USER_PASS,DATABASE_URL].join("@") : DATABASE_URL;
const URL = "postgres://"+DB_URL+"/"+DB_NAME;

app.use(
  postgraphile(URL),
  SCHEMA,
  {
    watchPg: true,
    graphiql: true,
    dynamicJson: true,
    disableDefaultMutations: true,
    showErrorStack: true
  }
);

app.listen(PORT);
console.log("PostGraphile listening in port: " + PORT);

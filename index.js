const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();
const env = {
  "PORT": process.env.PORT || 3000,
  "DATABASE_URL": process.env.DATABASE_URL,
  "DB_NAME": process.env.DB_NAME,
  "USER": process.env.USER,
  "PASS": process.env.PASS,
  "SCHEMA": process.env.SCHEMA
};

if(Object.entries(env).some(([k,v])=>{
    console.log(k, v);
    return !v;
  })
) {
  throw new Error("One of the enviroment values wasn't provided");
}

const USER_PASS = [USER, PASS].join(":");
const URL = "postgres://"+USER_PASS+DATABASE_URL+"/"+DB_NAME;

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

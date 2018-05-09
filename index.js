const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  postgraphile(process.env.DATABASE_URL),
  process.env.SCHEMA,
  {
     watchPg: true,
     graphiql: true,
     dynamicJson: true,
     disableDefaultMutations: true,
     showErrorStack: true
  }
));

app.listen(PORT);
console.log("PostGraphile listening in port: " + PORT);

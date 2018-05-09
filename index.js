const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();
const PORT = process.env.PORT || 3000;

if(!process.env.DATABASE_URL)
    throw new Error("DATABASE_URL is needed!");
if(!process.env.SCHEMA)
    throw new Error("SCHEMA's name is needed!");

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
);

app.listen(PORT, (a, b, c)=>console.log("a",a,"b",b,"c",c));
console.log("PostGraphile listening in port: " + PORT);

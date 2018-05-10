# ETER <img src="https://github.com/rlyehlab/ETER/blob/master/general/design/icono.svg" width=3% height=20%>  
***Open source Air Quality Monitor for community science***

### Welcome!

This is the server application for the web client. 
Built on top of [GraphQL](https://graphql.org/), [Postgraphile](https://www.graphile.org/) (layer connecting to DB) and [PostreSQL](https://www.postgresql.org/download/) with [NodeJs](https://nodejs.org/)!.
You will need the ***name of the schema***, the ***url of the database***, the ***user*** and ***password***(optional) for it.

So let's get started!

Get the repo
```
    git clone https://github.com/rlyehlab/eter-web-server.git && cd eter-web-server 
```
Install dependencies
```
    npm install
```
Remember passing variables for connecting to DB
VARIABLE | OPTIONAL | DEFAULT
------------ | ------------- | -------------
PORT | TRUE | 3000
DATABASE_URL | TRUE | 3000
DB_NAME | FALSE | 
USER | TRUE | ''
PASS | TRUE | ''
SCHEMA | FALSE | 

```
    npm start
```
or with yarn
```
    yarn install
```
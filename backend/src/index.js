const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

 /**
  * Tipos de parâmetros
  * Query Params : Parâmetros nomeados enviados na rota apos o "?" (filtros, paginação)
  * Route Params : Parâmetros utilizados para identificar recursos
  * Request Body : Corpo da requisição , utilizado  para criar  ou alterar recursos 
  * 
  * 
  * Tipos de banco
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
  * NoSQL: MongoDB, CouchDB, etc
  */





app.listen(3333);
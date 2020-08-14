// para executar a aplicação - node index.js
// npm install nodemon -D = instalando uma dependencia de desenvolvimento, para ser utilizado somente quando estiver desenvolvendo

// importando as funcionalidades do express
const express = require('express');
// Cors = determina quem pode ter acesso a aplicação
const cors = require('cors');
// importando as rotas. o "./" é usado para referenciar o nome do arquivo contido na mesma pasta
const routes = require('./routes');

// variavel que armazena a aplicação
const app = express();

app.use(cors());
// utilizando json para o corpo das requisições
app.use(express.json());
// importante que seja abaixo do express.json
app.use(routes);

// Rota / Recurso

/* Metodos HTTP

GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

*/

/**
 * Tipos de Parâmetros
 * 
 * Query params: Parâmetros nomeados enviados na rota após o simbolo de "?" (filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  * Query Builder a ser utilizada: knex
  * bd utilizado SQLite3
  * migrations - para manter um historico do bd
  */

// Porta mais usada para node
app.listen(3333);
// IMPORTANDO KNEX
const knex = require('knex');
// importando configurações do bando de dados
const configuration = require('../../knexfile');
// Criando conexão com o bd
const connection = knex(configuration.development);

// exportando conexão
module.exports = connection;

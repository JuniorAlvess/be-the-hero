  // Responsavel pela criação da table
// para executar a table = npx knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};
// Caso precise deletar uma table
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

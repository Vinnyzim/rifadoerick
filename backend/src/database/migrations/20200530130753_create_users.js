
exports.up = function(knex) {

    return knex.schema.createTable('usuario', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('logradouro').notNullable();
        table.string('complemento').notNullable();
        table.string('localidade').notNullable();
        table.string('uf',2).notNullable();
        table.string('descricao_conhece_mamae_papai').notNullable();
        table.string('msg_erick');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
  
};


exports.up = function(knex) {
  return knex.schema.createTable('tblproduto', function(table){
      table.increments('IdProduto').unique().notNullable();
      table.text('Nome')
      table.text('Marca')
      table.text('Descricao')
      table.text('Photo')
      table.text('Lancamento')
      table.text('Status')
      table.integer('Notify')
      table.text('cor')
      table.integer('IdSubCategoria')
      table.integer('IdVendedor')
      table.integer('Destaque')
      table.integer('Desconto')
      table.integer('Taxa')
      table.integer('Excluido')
      table.timestamp('DateInsert').defaultTo(knex.fn.now())
      table.timestamp('LastUpdate').defaultTo(knex.fn.now())
      table.integer('Preco')
      table.float('Peso')
      table.integer('Quantidade')
      table.integer('IdUnidade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblproduto')
};

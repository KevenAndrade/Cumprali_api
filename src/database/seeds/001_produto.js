
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tblproduto').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblproduto').insert([
        {
          Nome: "samsung", 
          Marca: 'samsung',
          Descricao: 'samsung',
          Photo: 'samsung',
          Lancamento: 'samsung',
          Status: 'samsung',
          Notify: 1,
          cor: 'samsung',
          IdSubCategoria: 1,
          IdVendedor: 1,
          Destaque: 1,
          Desconto: 1,
          Taxa: 1,
          Excluido: 1,
          Preco: 15000,
          Peso: 1.0,
          Quantidade: 1,
          IdUnidade: 1,
        },
      ]);
    });
};

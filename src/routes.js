const express = require('express')
const routes = express.Router();
const ProdutoController = require('./controllers/ProdutoController');
const SubcategoriasController = require('./controllers/SubcategoriasController');


routes 
    // Rotas de Produtos
    .get('/produtos', ProdutoController.lista)
    .get('/produtos/:id', ProdutoController.listaOne)
    .post('/produtos', ProdutoController.create)
    .put('/produtos/:id', ProdutoController.update)
    .delete('/produtos/:id', ProdutoController.delete)

    // Subcategorias
    .get('/subcategorias', SubcategoriasController.lista)

module.exports = routes

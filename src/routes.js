const express = require('express')
const routes = express.Router();
const ProdutoController = require('./controllers/ProdutoController');


routes.get('/produtos', ProdutoController.lista)
routes.post('/produtos', ProdutoController.create)

module.exports = routes

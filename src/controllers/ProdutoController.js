const knex = require('../database');

module.exports ={
    async lista(req, res) {
        const results = await knex('tblproduto')

        return res.json(results)
    },

    async create(req, res) {
        try {
            const { Nome, Marca, Descricao, Photo,Lancamento ,Status ,
                Notify , Cor ,IdSubCategoria, IdVendedor , Destaque ,
                Desconto , Taxa , Excluido ,Preco ,Peso ,Quantidade ,IdUnidade 
            } = req.body;

            await knex('tblproduto').insert({ Nome, Marca, Descricao, Photo,Lancamento ,Status ,
                Notify , Cor ,IdSubCategoria, IdVendedor , Destaque ,
                Desconto , Taxa , Excluido ,Preco ,Peso ,Quantidade ,IdUnidade 
            })

            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    }
}
const knex = require('../database');

module.exports ={
    async lista(req, res) {
        const results = await knex('tblproduto')

        return res.json(results)
    },

    async create(req, res, next) {
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
    },

    async update(req, res,next) {
        try {
            const {id} = req.params;

            const { Nome, Marca, Descricao, Photo,Lancamento ,Status ,
                Notify , Cor ,IdSubCategoria, IdVendedor , Destaque ,
                Desconto , Taxa , Excluido ,Preco ,Peso ,Quantidade ,IdUnidade 
            } = req.body;

            await knex('tblproduto').update({ Nome, Marca, Descricao, Photo,Lancamento ,Status ,
                Notify , Cor ,IdSubCategoria, IdVendedor , Destaque ,
                Desconto , Taxa , Excluido ,Preco ,Peso ,Quantidade ,IdUnidade
            }).where({ IdProduto:id })

            return res.send()
            
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            await knex('tblproduto').where({ IdProduto:id }).del()

            return res.send()
            
        } catch (error) {
            next(error)
        }
    }
}
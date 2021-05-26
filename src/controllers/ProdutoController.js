const knex = require('../database');

module.exports ={
    async lista(req, res) {

        const { page = 1 } = req.query;
        const results = await knex('tblproduto').limit(5).offset((page - 1) * 5)

        const [ count ] = await knex('tblproduto').count();
        console.log( count );
        
        res.header('X-total-count', count["count(*)"] )

        return res.json(results)
    },

    async listaOne(req, res,next) {
        try {
            const { id } = req.params;
            const query =  knex('tblproduto')

            if (id) {
                query
                    .where({ idProduto: id })
                    .join('tblsubcategoria', 'tblsubcategoria.IdSubCategoria', '=', 'tblproduto.IdSubCategoria')
                    .join('tblvendedor', 'tblvendedor.IdVendedor', '=', 'tblproduto.IdVendedor')
                    .select('tblproduto.*', {subcategoria: 'tblsubcategoria.Nome'}, {nomeVendedor: 'tblvendedor.Nome'})
            }

            
            results = await query
            return res.json(results)

        } catch (error) {
            next(error)
        }
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
const knex = require('../database');

module.exports ={
    async lista(req, res) {
        const results = await knex('tblproduto')

        return res.json(results)
    }

    
}
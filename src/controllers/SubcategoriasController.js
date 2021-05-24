const knex = require('../database');

module.exports ={
    async lista(req, res, next) {
        try {
            const results = await knex('tblsubcategoria')
            return res.json(results)
            
        } catch (error) {
            next(error)
        }
        
    },
}
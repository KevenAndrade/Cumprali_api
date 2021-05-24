const express = require('express');
const knex = require('./database');
const cors = require('cors');

const app = express();
/* app.use(cors()); */
/* app.use(express.json()); */

app.get('/produtos', (req, res) => {

     knex('tblproduto').then((results) => {
        return res.json(results)
    })
    /* return res.status(201).json({error: 'Invalid project ID.'}); */
})

app.listen(3334, () => console.log('server is on'))


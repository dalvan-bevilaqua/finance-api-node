const knex = require('../../../database/_knex')

async function getDespesa(req){
    
   
    var query  = knex('despesa');

    if (req.query.dtIni && req.query.dtFim){
        query.whereBetween('dt_debito', [req.query.dtIni, req.query.dtFim]);
    }

    if (req.query.descricao){
        query.where('descricao','like','%'+req.query.descricao+'%');
    }

    return query.then((results) => {
        return results
    })
}

async function save(req){
    
    return knex('despesa').insert([req.body]).then((result) =>{
        return result
    })

}

module.exports = {getDespesa, save};
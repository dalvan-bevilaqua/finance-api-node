const knex = require('../../../database/_knex')

async function getDespesa(req){
    
    var query  = knex('despesa');

    if (req.query.dtReferencia){
        let dtIni = await getDtIni(req.query.dtReferencia)
        let dtFim = await getDtFim(req.query.dtReferencia)
        
        query.whereBetween('dt_debito', [dtIni, dtFim]);
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

async function getDtIni(dtReferencia){
    let data = new Date(dtReferencia);
    return new Date(data.getFullYear(), data.getMonth(), 1)
}

async function getDtFim(dtReferencia){
    let data = new Date(dtReferencia);
    return new Date(data.getFullYear(), data.getMonth() + 1, 0);
}


module.exports = {getDespesa, save};
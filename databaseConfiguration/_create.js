const db = require('./_database')

async function createTables(){

    await db.connect();

    await db.query(`CREATE TABLE IF NOT EXISTS despesa (
        cd serial PRIMARY KEY,
        descricao VARCHAR(20) NOT NULL, 
        valor DECIMAL(8,2) NOT NULL,
        dt_cadastro DATE NOT NULL,
        dt_debito DATE NOT NULL
        );
    `);

    await db.end();

}

createTables();
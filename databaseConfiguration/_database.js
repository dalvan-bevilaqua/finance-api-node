const pg = require('pg');

const client = new pg.Client({
    user:'postgres',
    host: 'localhost',
    database:'postgres',
    password: 'postgres',
    port: 54320
})

module.exports = client;
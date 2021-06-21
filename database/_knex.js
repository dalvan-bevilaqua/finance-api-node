const databaseConfig = require('../knexfile')
const knex = require('knex')(databaseConfig.development);
module.exports = knex; 
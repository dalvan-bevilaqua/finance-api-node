
exports.up = knex  => 
   knex.schema.createTable('user', table => {
     table.increments('id')
     table.text('username').unique().notNullable()
     
     table.timestamp('created_at').defaultTo(knex.fn.now())
     table.timestamp('updated_at').defaultTo(knex.fn.now())
  })


exports.down = knex  => knex.schemaschema.dropTable('users')


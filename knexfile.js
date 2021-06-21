// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
        database: "postgres",
        user: "postgres",
        password: "postgres",
        port: "54320"
    },
    migrations: {
        tableName: 'migrations',
        directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '${__dirname}/database/migrations'
    }
  }

};

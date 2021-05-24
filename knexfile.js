// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      database: "loremtec_cumprali",
      user: "root",
      password: ""
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};

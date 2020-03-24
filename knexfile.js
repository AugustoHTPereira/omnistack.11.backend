// Update with your config settings.

module.exports = {

  development: {
    client: "mssql",
    connection: {
      server: "callhubrest.mssql.somee.com",  
      database: "callhubrest",
      user: "callhub_application",
      password: "Y5hWx9h8xaDKbUb"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    },
    options: {
      enableArithAbort: true
    }
  },

  staging: {
    client: "mssql",
    connection: {
      server: "callhubrest.mssql.somee.com",  
      database: "callhubrest",
      user: "callhub_application",
      password: "Y5hWx9h8xaDKbUb"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    },
    options: {
      enableArithAbort: true
    }
  },

  production: {
    client: "mssql",
    connection: {
      server: "callhubrest.mssql.somee.com",  
      database: "callhubrest",
      user: "callhub_application",
      password: "Y5hWx9h8xaDKbUb"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    },
    options: {
      enableArithAbort: true
    }
  }

};

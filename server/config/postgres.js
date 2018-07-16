const { Pool } = require('pg')

module.exports = function(app) {
  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */
  return new Pool({
    /**
     *  @TODO: Supply the correct configuration values to connect to postgres
     */
    port: app.get('PORT'),
    host: app.get('PG_HOST'),
    user: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DB'),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000

  })
  console.log("connected to the database")
}

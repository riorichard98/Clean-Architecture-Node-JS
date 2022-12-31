const { Pool } = require('pg')

module.exports = class PgSql {
    #config
    #pool
    constructor(config) {
        this.#config = config
        this.#pool = new Pool({
            user: this.#config.dbUser,
            host: this.#config.dbHost,
            database: this.#config.dbName,
            password: this.#config.dbPass,
            port: this.#config.dbPort,
            // connectionTimeoutMillis: this.#config.dbTimeout,
            // min: this.#config.dbMinPool,
            // max: this.#config.dbMaxPool
        })
    }
    
    async query(queryStr) {
        try {
            const res = await this.#pool.query(queryStr)
            return res
        } catch (error) {
            console.log('database connection error');
            throw(error)
        }
    }
}
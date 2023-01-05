import pkg from 'pg';
const { Pool } = pkg;

export default class PgSql {
    #pool
    constructor(config) {
        this.#pool = new Pool({
            user: config.dbUser,
            host: config.dbHost,
            database: config.dbName,
            password: config.dbPass,
            port: config.dbPort,
            // connectionTimeoutMillis: config.dbTimeout,
            // min: config.dbMinPool,
            // max: config.dbMaxPool
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
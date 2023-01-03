const Sql = require('./sql')

module.exports = class MenuRepo{
    #db
    #findAllSql
    constructor(db){
        this.#db = db
        this.#findAllSql = new Sql()
    }

    async getAllMenu(){
        const menus = await this.#db.query(this.#findAllSql.getAllMenu)
        return menus
    }
}
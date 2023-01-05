import Sql from './sql.js'

export default class MenuRepo{
    #db
    #Sql
    constructor(db){
        this.#db = db
        this.#Sql = new Sql()
    }

    async getAllMenu(){
        const menus = await this.#db.query(this.#Sql.getAllMenu)
        return menus.rows
    }

    async getMenuById(id){
        const sql = this.#Sql.getMenuById
        sql.values = [id]
        const menu = await this.#db.query(sql)
        if(!menu.rows.length) return false
        return menu.rows[0]
    }
}
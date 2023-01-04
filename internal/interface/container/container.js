const PgSql = require('../../infrastructure/pg/pgSql')
const Mongo = require('../../infrastructure/mongo/mongoose')
const MenuRepo = require('../../domain/menu/repo')
const UserRepo = require('../../domain/user/repo')

class Container{
    constructor(){
        this.pgDb = new PgSql({
            dbUser : process.env.USER,
            dbHost : process.env.HOST,
            dbName : process.env.DATABASE,
            dbPass : process.env.PASSWORD,
            dbPort : process.env.PORT
        })
        this.mongoDb = new Mongo(process.env.MONGO_URI)
        this.MenuRepo = new MenuRepo(this.pgDb)
        this.UserRepo = new UserRepo(this.UserRepo)
    }
}

export{Container}
import PgSql from '../../infrastructure/pg/pgSql'
import Mongo from '../../infrastructure/mongo/mongoose'
import MenuRepo from '../../domain/menu/repo'
import UserRepo from '../../domain/user/repo'

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
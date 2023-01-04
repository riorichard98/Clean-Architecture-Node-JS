import PgSql from '../../infrastructure/pg/pgSql'
import Mongo from '../../infrastructure/mongo/mongoose'
import MenuRepo from '../../domain/menu/repo'
import UserRepo from '../../domain/user/repo'
import MenuService from '../usecase/menu'
import Utils from '../../../pkg/utils/utils'

export default class Container{
    #MenuRepo
    #UserRepo
    #helper
    constructor(){
        // databases
        this.pgDb = new PgSql({
            dbUser : process.env.USER,
            dbHost : process.env.HOST,
            dbName : process.env.DATABASE,
            dbPass : process.env.PASSWORD,
            dbPort : process.env.PORT
        })
        this.mongoDb = new Mongo(process.env.MONGO_URI)

        // repositories
        this.#MenuRepo = new MenuRepo(this.pgDb)
        this.#UserRepo = new UserRepo(this.UserRepo)

        // helper,utils,etc
        this.#helper = new Utils()

        // services from usecase
        this.MenuService = new MenuService({
            userRepo : this.#UserRepo,
            menuRepo : this.#MenuRepo
        },
        this.#helper.response
        )
    }
}
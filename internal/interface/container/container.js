import PgSql from '../../infrastructure/pg/pgSql.js'
import Mongo from '../../infrastructure/mongo/mongoose.js'
import MenuRepo from '../../domain/menu/repo.js'
import UserRepo from '../../domain/user/repo.js'
import MenuService from '../usecase/menu.js'
import Utils from '../../../pkg/utils/utils.js'

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
        this.#UserRepo = new UserRepo(this.mongoDb)

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
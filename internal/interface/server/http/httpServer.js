import express from 'express'
import Handler from './handler/handler.js'
import Router from './router.js'
import cors from 'cors'

export default class HttpServer{
    #router
    #port
    constructor(container){
        this.#router = new Router(express.Router(),new Handler(container))
        this.#port = 3000
    }

    errorHandler(error, req, res, next){
        console.log(error)
        res.status(500).json({
            data: null,
            status: "0012",
            message: "internal server error"
        })
    }

    startHtppService(){
        const app = express()
        const allRoutes = this.#router.setupRouter()

        app.use(cors())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        app.use('/', allRoutes)
        app.use(this.errorHandler)
        app.listen(this.#port, () => {
            console.log(`Listening on port ${this.#port}`)
        })
    }
}
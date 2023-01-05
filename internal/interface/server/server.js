import HttpServer from "./http/httpServer.js";

export default class Server{
    #httpServer
    constructor(container){
        this.#httpServer = new HttpServer(container)
    }

    startService(){
        this.#httpServer.startHtppService()
    }
}
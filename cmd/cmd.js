import Container from "../internal/interface/container/container.js";
import Server from "../internal/interface/server/server.js";

export default class Cmd{
    run(){
        const container = new Container()
        const server = new Server(container)
        server.startService()
    }
}
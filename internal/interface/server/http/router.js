export default class Router{
    #handler
    constructor(router,handler){
        this.router = router
        this.#handler = handler
    }

    setupRouter(){
        this.router.post('/menu/order',this.#handler.menuHandler.OrderMenu)
        return this.router
    }
}
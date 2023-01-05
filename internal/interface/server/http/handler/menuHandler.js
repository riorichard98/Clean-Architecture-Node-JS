export default class MenuHandler{
    #container
    constructor(container){
        this.#container = container
        
        // need to bind first
        this.OrderMenu = this.OrderMenu.bind(this)
    }

    async OrderMenu(req,res,next){
        try {
            const {name,menuId} = req.body
            const data = {name,menuId}
            const r = await this.#container.MenuService.orderMenu(data)
            res.status(r.httpStatus).json({
                data: null,
                status: r.statusCode,
                message: r.message
            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
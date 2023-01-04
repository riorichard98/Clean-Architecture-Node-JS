export default class MenuService{
    #userRepo
    #menuRepo
    #response
    constructor(repositories,response){
        this.#userRepo = repositories.userRepo
        this.#menuRepo = repositories.menuRepo
        this.#response = response
    }

    async orderMenu(data){
        if(!data.name) return this.#response(200,"please input your name","0210")
        if(!data.menuId) return this.#response(200,"please input your menu id","0210")
        const found = await this.#menuRepo.getMenuById(data.menuId)
        if(!found) return this.#response(200, 'menu not found', '0169')
        await this.#userRepo.createUser({name:data.name,menuId:data.menuId})
        return this.#response(200, 'success order menu', '0001')
    }
}
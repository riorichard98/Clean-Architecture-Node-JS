export default class Sql {
    constructor() {
        this.getAllMenu = 'select * from "Menus"'
        this.getMenuById = {
            name: 'get-menu-by-id',
            text: 'select * from "Menus" where id = $1;'
        }
    }
}
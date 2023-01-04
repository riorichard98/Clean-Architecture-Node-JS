import  express  from "express";
import Container from "../container/container";
import MenuHandler from "./handler/menuHandler";

const router = express.Router()

const container = new Container()
const menuHandler = new MenuHandler(container)

router.post('/menu/order',menuHandler.OrderMenu)

export default router
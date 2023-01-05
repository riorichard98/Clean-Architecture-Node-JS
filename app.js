import { config } from "dotenv";
config()
import Cmd from "./cmd/cmd.js";

const command = new Cmd()
command.run()
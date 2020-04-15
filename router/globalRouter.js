import express from "express"
import routes from "../routes"
import {home} from "../controllers/globalController"
import { getLogin, getJoin } from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.login,getLogin);
globalRouter.get(routes.join,getJoin);

globalRouter.get(routes.logout,function logout(req,res){
    res.send("LOGOUT")

})
export default globalRouter;


import express from "express"
import routes from "../routes"
import {home} from "../controllers/globalController"
import { getLogin, getJoin, postJoin, postLogin, logout,getMe, facebook_login, facebook_login_callback, postFacebookLogin } from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middleware/middlewares";
import passport from "passport"
const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.login,onlyPublic,getLogin);
globalRouter.post(routes.login,onlyPublic,postLogin);

globalRouter.get(routes.join,onlyPublic,getJoin);
globalRouter.post(routes.join,onlyPublic,postJoin,postLogin);

globalRouter.get(routes.logout,onlyPrivate,logout);
globalRouter.get(routes.me,onlyPrivate,getMe);

globalRouter.get(routes.facebook_login,facebook_login) // facebook사이트로 보내는 함수
globalRouter.get(
    routes.facebook_login_callback,
    passport.authenticate("facebook",{failureRedirect :"/login"}),
    postFacebookLogin)//

export default globalRouter;


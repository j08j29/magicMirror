import express from "express"
import { getMe, userDetail, edit_profile, change_password } from "../controllers/userController";
import routes from "../routes";
import { onlyPrivate } from "../middleware/middlewares";


const userRouter = express.Router();
userRouter.get(routes.edit_profile,onlyPrivate,edit_profile)
userRouter.get(routes.change_password,onlyPrivate,change_password)
userRouter.get(routes.user_detail(),userDetail)//겟 라우터 순서가 중요하다

export default userRouter;
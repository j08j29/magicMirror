import express from "express"

const userRouter = express.Router();

userRouter.get("/users/editProfile",function editProfile(req,res){
    res.send("EDIT_PROFILE")
    
})
userRouter.get("/users/changePassword",function changePassword(req,res){
    res.send("CHANGE_PASSWORD")
    
})

export default userRouter;
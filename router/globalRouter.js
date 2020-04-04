import express from "express"

const globalRouter = express.Router();

globalRouter.get("/",function home(req,res){
    res.send("HOME")
})

globalRouter.get("/login",function login(req,res){
    res.send("LOGIN")

})

globalRouter.get("/logout",function logout(req,res){
    res.send("LOGOUT")

})

globalRouter.get("/join",function join(req,res){
    res.send("JOIN")

})

export default globalRouter;


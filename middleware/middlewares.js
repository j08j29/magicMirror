import routes from "../routes"
export const localsMiddleware=(req,res,next)=>{
    res.locals.siteName = "ALL ABOUT YOUR CLOSET"
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;//요청에서 유저를 빼와서 응답에 저장 (로컬전역으로) 유저가 없는 경우 널값을 배당
    next();
}
export const onlyPublic = (req,res,next)=>{
    if(req.user){
        res.redirect(routes.home);
    }//로그인이 되어있다면 홈으로
    else{
        next();
    }
}//로그인이 되어있는 경우

export const onlyPrivate = (req,res,next)=>{
    if(req.user){
        next();
    }else{
        res.redirect(routes.home);//로그아웃되어있는 경우 홈으로 간다.
    }
}//로그아웃되어있는경우
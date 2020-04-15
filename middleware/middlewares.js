import routes from "../routes"
export const localsMiddleware=(req,res,next)=>{
    res.locals.siteName = "ALL ABOUT YOUR CLOSET"
    res.locals.routes = routes;
    next();
}
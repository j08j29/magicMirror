import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookie_parser from "cookie-parser"
import body_parser from "body-parser"
import {localsMiddleware} from "./middleware/middlewares.js"
import globalRouter from "./router/globalRouter"
import userRouter from "./router/userRouter"
const app = express();

app.set("view engine","pug");
app.use(cookie_parser());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("tiny"));
app.use(localsMiddleware);

app.use("/",globalRouter);//전역
app.use("/",userRouter);//유저관련





export default app;

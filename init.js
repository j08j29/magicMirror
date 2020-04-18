import app from "./app"
import "./db"
import dotenv from "dotenv" 
import User from "./models/User"
dotenv.config();
const PORT = process.env.PORT;

function ListeningHandling(){
    console.log("listening server :"+`http://localhost:${PORT}/`);    
}

app.listen(PORT,ListeningHandling); //서버를 여는 명령문.
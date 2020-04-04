import express from "express"
import app from "./app"
const PORT = 4000;

function ListeningHandling(){
    console.log("listening server :"+"http://localhost:4000/");    
}

app.listen(PORT,ListeningHandling);
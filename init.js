import app from "./app"
const PORT = 4000;

function ListeningHandling(){
    console.log("listening server :"+`http://localhost:${PORT}/`);    
}

app.listen(PORT,ListeningHandling);
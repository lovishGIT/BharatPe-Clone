import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"

const app= express();
const port= 3000;
const __dirname= dirname(fileURLToPath(import.meta.url))

const user= "LOGIN/SIGNUP";

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=> {
    res.render(__dirname + "/views/index.ejs")
});

app.get("/about", (req,res)=> {
    res.render(__dirname + "/views/about.ejs")
})

app.listen(port, (req, res)=> {
    console.log(`Server Listenning to PORT:${port}`);
});
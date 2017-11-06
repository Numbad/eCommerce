const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

const mangas = require("./model/mangas/mangas.json");
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.redirect("/index.html");
});

app.get("/mangas", (req, res) => {
    res.send(JSON.stringify({status: 200, mangas: mangas}));
});

app.get("/mangas/:mangaId", (req, res) => {
    var mangaById = require("./model/mangas/" + req.params.mangaId + ".json");
    res.send(JSON.stringify({status: 200, manga: mangaById}));
});

app.listen(port || process.env.PORT,function(){
    console.log("server running");
});
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

const mangas = require("./model/mangas/mangas.json");

app.use(express.static("public"));
app.use(morgan("dev"));
/*
var products = [{
    name : "test",
    price : 15
}]
*/
//require("/server/products")(app);

app.get("/", (req, res) => {
    res.redirect("/index.html");
});

app.get("/mangas", (req, res) => {
    //console.log(mangas);
    res.send(JSON.stringify({status: 200, mangas: mangas}));
});

app.listen(port,function(){
    console.log("server running");
});
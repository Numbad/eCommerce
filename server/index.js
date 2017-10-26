const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

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
})

app.listen(port,function(){
    console.log("server running");
});
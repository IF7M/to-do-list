const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){


let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let dayAr = today.toLocaleDateString("ar-SA", options);
let dayEn = today.toLocaleDateString("en-SA", options);

res.render("list", {dayIsEn: dayEn, dayIsAr: dayAr, newListItems:items });


});

app.post("/", function(req, res){

items.push(req.body.newTask);

res.redirect("/");


});


app.post("/1", function(req, res){

items.pop(req.body.remTask);

res.redirect("/");


});










app.listen(port, function(){
  console.log(`Server on using port${port}, url http://localhost:${port}`);
});

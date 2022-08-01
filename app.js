//require
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname+"/date.js");

//settings
const port = 3000;

const app = express();

const items = [];

//set
app.set('view engine', 'ejs');

//use
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//get
app.get("/", function(req, res){

const day = date.getDate();

res.render("list", {dayIs: day, newListItems:items });

});

app.get("/about", function(req, res){
  res.render("about");
})

app.post("/", function(req, res){
let buttonPreesd = req.body.button;
if (buttonPreesd === "adding"){
items.push(req.body.newTask);
} else{
  items.pop(req.body.remTask);
}

res.redirect("/");


});







//listen
app.listen(port, function(){
  console.log(`Server on using port${port}, url http://localhost:${port}`);
});

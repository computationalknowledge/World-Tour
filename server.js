var express = require('express');
var loggedinusername = "";
const { json } = require('body-parser');
const mongo = require('./public/scripts/mongodb_functions');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

app.get("/giveMeSomeData", function(req, res) {

   res.send("I dont want to send");

})


app.get("/signup", function(req, res){

   var data = req.query.obj;

   console.log(JSON.parse(data))

   // we have to sedn this data into database
   mongo.createUser(JSON.parse(data), "logInUsers");

   // window.location.href = "http://localhost:8081/register.html"
   



})

app.get("/login", function(req,res){

   var data = req.query.info;

   console.log("login request")

   console.log(JSON.parse(data))

   mongo.checkUser(JSON.parse(data),"logInUsers",res, initialiseLoginUser)
})

app.get("/currentuser", function(req,res){

   console.log("username------")
   console.log(loggedinusername)

   res.send({
      uname: loggedinusername
  })

})


app.get("/bookairline", function(req,res){
   var data = req.query.obj;
   console.log(JSON.parse(data))

   mongo.makebooking(JSON.parse(data),"Bookings")
})


app.get("/bookcar",function(req,res){

   var data = req.query.obj;
   console.log(JSON.parse(data))

   console.log(".....................")

   mongo.makebooking(JSON.parse(data),"Bookings")
})



function initialiseLoginUser(uname){

loggedinusername = uname;
console.log("printing username ----")
console.log(loggedinusername)

}
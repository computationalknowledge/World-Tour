var express = require('express');
var loggedinusername = "";
const { json } = require('body-parser');
const mongo = require('./public/scripts/mongodb_functions');


var app = express();
var f = require('fs')

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


app.get("/signup", function(req, res){

   var data = req.query.obj;

   console.log(JSON.parse(data))

   // we have to sedn this data into database
   mongo.createUser(JSON.parse(data), "logInUsers");

   // window.location.href = "http://localhost:8081/register.html"
   res.send("abcd")

   


})

app.get('/getLoginUser', function(req, res){

   res.send(JSON.stringify({loggedinusername}))

})

app.get('/logout',(req,res)=>{

   loggedinusername = ''

   res.send(JSON.stringify({status: 'logout'}))
   


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

   mongo.makebooking(JSON.parse(data),"Bookings", res)
})


app.get("/bookcar",function(req,res){

   var data = req.query.obj;
   console.log(JSON.parse(data))

   console.log(".....................")

   mongo.makebooking(JSON.parse(data),"Bookings", res)
})


app.get(loggedinusername,function(req,res){
   mongo.readMyList
})

app.get("/showlist",function(req,res){
   
   mongo.readMyList("Bookings",res, loggedinusername)
})


app.get("/deletebooking", function(req,res){

   var data = req.query.info;

   console.log("delete request")

   console.log(JSON.parse(data))
   mongo.deleteBook(JSON.parse(data),"Bookings",res)

   // mongo.checkUser(JSON.parse(data),"logInUsers",res, initialiseLoginUser)

   
})



function initialiseLoginUser(uname){

loggedinusername = uname;
console.log("printing username ----")
console.log(loggedinusername)

}


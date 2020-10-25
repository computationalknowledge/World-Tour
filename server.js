var express = require('express');
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
   



})
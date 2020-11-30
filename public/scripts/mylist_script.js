
var userdata = [];
var name = "";
var code = "";
var price = 0;
var keysarray = []
var booking = "";

fetch(`/showlist`).then((response) => {
    
   
    response.json().then((data)=>{
       
        console.log(data)
        

        userdata = data
        name = userdata[0].username

        console.log(Object.keys(userdata[0]));
        // keysarray = Object.keys(userdata[0]);


        for(var i = 0 ; i < userdata.length; i++){

        //   code += "<li>" + userdata[i] + "</li>"

        keysarray = Object.keys(userdata[i]);
        booking = keysarray[2];
        console.log(booking)


          code +=  "<li>" +  keysarray[2] +": " +userdata[i][keysarray[2]] + "<br>";
          code +=  "Passenger: " + userdata[i].passenger + "<br>";
          code +=  "Check In: " + userdata[i].checkin + "<br>";
          code +=  "Check Out: " + userdata[i].checkout + "<br>";
          code +=  "Price: $" + userdata[i].total + "<br> <button >Delete</button> </li>";

          

          price += userdata[i].total ;
        }

        code += "<li> Total Price: $"+ price  +"<li>";
        

        document.getElementById('custdetails').innerHTML = "Hello, " + name +" ";

        document.getElementById("userlist").innerHTML = code;
    })

})
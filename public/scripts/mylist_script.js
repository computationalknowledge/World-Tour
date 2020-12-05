
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

// code = '<style> button { background: #DEB887;  width: 190px; font-size: 16px; line-height: 25px;  padding: 10px 0;  border-radius: 15px;cursor: pointer; color: #000; } button:hover{color: #fff;background-color: black;}</style>';
          code +=  "<li>" +  keysarray[2] +": " +userdata[i][keysarray[2]] + "<br>";
          code +=  "Passenger: " + userdata[i].passenger + "<br>";
          code +=  "Check In: " + userdata[i].checkin + "<br>";
          code +=  "Check Out: " + userdata[i].checkout + "<br>";
          code +=  "Price: $" + userdata[i].total + "<br> ";
          code+= "<button onClick='DeleteBooking(\""+ userdata[i]._id +"\" )'>Cancel</button> </li>";
          code += '<style> button { background: #DEB887;  width: 190px; font-size: 16px; line-height: 25px;  padding: 10px 0;  border-radius: 15px;cursor: pointer; color: #000; } button:hover{color: #fff;background-color: black;}</style>';

          

          price += userdata[i].total ;
        }

        code += "<li> Total Price: $"+ price  +"<li>";
        

        document.getElementById('custdetails').innerHTML = "Hello, " + name +" ";

        document.getElementById("userlist").innerHTML = code;
    })

})
function DeleteBooking(loginid){
  console.log("................delete entry")

  
console.log("........."+ loginid)
  fetch(`/deletebooking?info=${JSON.stringify(loginid)}`).then((response)=>{

    // console.log(response.text)
           
    response.json().then((data)=>{

      location.reload();
        
       })

 })
  }
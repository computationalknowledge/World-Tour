
var Alert = new CustomAlert();

function registerUser(){

// request to server to insert data into database

data = {
    
    firstname: document.getElementById("fname").value ,
    lastname: document.getElementById("lname").value ,
    password: document.getElementById("passwordsignup").value

}
if(data.firstname == "" || data.lastname == "" || data.password == "" ){
    
    Alert.render('fill you empty  fields')
    // alert('fill you fields');

}else{
    fetch(`/signup?obj=${JSON.stringify(data)}`).then((response) => {

        console.log(response.text())
        // alert("registration process over")
        Alert.render('You are Sucessfully register')
    
        // window.location.href = "http://localhost:8081/register.html"
    
    })
}


// fetch(`/signup?obj=${JSON.stringify(data)}`).then((response) => {

//     console.log(response.text())
//     alert("registration process over")

//     window.location.href = "http://localhost:8081/register.html"

// })


}


function userlogIn(){
   
    var username = document.getElementById('username').value.trim()
    var password = document.getElementById('upassword').value.trim()
    
    var loginObj = {
        username : username,
        password : password
    }
    
    fetch(`/login?info=${JSON.stringify(loginObj)}`).then((response)=>{

        // console.log(response.text)
               
        response.json().then((data)=>{
            if (data.status === 'Unsuccessful'){
                // alert('Invaid Username/Password')
               
                Alert.render('Invalid username/Password')
               

                
            }else{

               
                // alert('Logged In Successfully')
                Alert.render('Successfully login')

                // logout button add

                // window.location.href = "http://localhost:8081"
                
            }
           })

     })
    
    }
    function CustomAlert(Message) {
        this.render = function(dialog) {
            var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
       
        dialogbox.style.top = "100px"
        dialogbox.style.display = "block";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        
        
            document.getElementById('dialogboxhead').innerHTML = "Alert";
            document.getElementById('dialogboxbody').innerHTML = dialog;
            document.getElementById('dialogboxfoot').innerHTML = '<button onClick = Alert.ok()>OK</button>';
    
    
        }
        this.ok = function() {
            // document.getElementById('dialogbox').style.display = "none";
            // document.getElementById('displayoverlay').style.display = "none";
            
            window.location.href = "http://localhost:8081"
    
        }

        

    }
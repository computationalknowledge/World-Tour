

function registerUser(){

// request to server to insert data into database

data = {
    
    firstname: document.getElementById("fname").value ,
    lastname: document.getElementById("lname").value ,
    password: document.getElementById("passwordsignup").value

}



fetch(`/signup?obj=${JSON.stringify(data)}`).then((response) => {

    console.log(response.text())
    alert("registration process over")

    window.location.href = "http://localhost:8081/register.html"

})


}


function userlogIn(){
   
    var username = document.getElementById('username').value.trim()
    var password = document.getElementById('upassword').value.trim()
    
    var loginObj = {
        username : username,
        password : password
    }
    
    fetch(`/login?info=${JSON.stringify(loginObj)}`).then((response)=>{

        console.log(response.text)
               
        response.json().then((data)=>{
            if (data.status === 'Unsuccessful'){
                alert('Invaid Username/Password')
            }else{
                alert('Logged In Successfully')

                window.location.href = "http://localhost:8081"
                
            }
           })

     })
    
    }


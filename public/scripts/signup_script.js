

function registerUser(){

// request to server to insert data into database

data = {
    
    firstname: document.getElementById("fname").value ,
    lastname: document.getElementById("lname").value ,
    password: document.getElementById("passwordsignup").value

}



fetch(`/signup?obj=${JSON.stringify(data)}`).then((response) => {

    console.log(response.text())

    window.location.href = "http://localhost:8081/register.html"

})


}


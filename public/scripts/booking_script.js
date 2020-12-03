function bookairlinefunc(){


    fetch("/currentuser").then((response)=>{

        

        response.json().then((data)=>{
            console.log(data.uname)

            Booking_data = {

                // username: user.loggedInUser,
                username: data.uname,
                Airline: document.getElementById("airlinename").value ,
                passenger: document.getElementById("numpassenger").value ,
                checkin: document.getElementById("aircheckin").value,
                checkout: document.getElementById("aircheckout").value,
        
                total: (document.getElementById("numpassenger").value)*50
        
            
            }
            if (Booking_data.Airline == ""|| Booking_data.passenger == ""|| Booking_data.checkin == "" || Booking_data.checkout == "") {
             alert('please fill your fields')
            }else{
                fetch(`/bookairline?obj=${JSON.stringify(Booking_data)}`).then((response) => {
        
                    console.log(response.text())
                    alert('succesfully login')
                
                    // window.location.href = "http://localhost:8081/register.html"
                
                })

            }
        
            


         


    })
    })
    

}

function bookcarfunc(){


    fetch("/currentuser").then((response)=>{

        

        response.json().then((data)=>{
            console.log("......................")
            console.log(data.uname)

            Booking_data = {

                // username: user.loggedInUser,
                username: data.uname,
                CarType: document.getElementById("carname").value.trim(),
                passenger: document.getElementById("carperson").value.trim(),
                checkin: document.getElementById("carcheckin").value,
                checkout: document.getElementById("carcheckout").value,
        
                total: (document.getElementById("carperson").value)*30
        
            
            }
        
            fetch(`/bookcar?obj=${JSON.stringify(Booking_data)}`).then((response) => {
        
               
                

              
                    console.log(response.text())
                 

               
            
                // window.location.href = "http://localhost:8081/register.html"
            
            })


         


    })
    })

}
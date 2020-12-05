var Alert2 =  new CustomAlert();
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
                swal("Oops!", "Fill your empty Fields!", "error");
            }else{
                fetch(`/bookairline?obj=${JSON.stringify(Booking_data)}`).then((response) => {
                    
                    
                    response.json().then((data)=>{
                   
                        console.log(data)
                        // swal("Congratulations!", "Booking has been done!", "error");
                        Alert2.render('Booking has been done')
                        console.log('..........................booked succesful')
                       
                     
                          
                         })
                  
                
                    // window.location.href = "http://localhost:8081/register.html"
                
                })

            }

            // fetch(`/bookairline?obj=${JSON.stringify(Booking_data)}`).then((response) => {
        
            //     //console.log(response.text())

            //     response.json().then((data)=>{
                   
            //         console.log(data)
            //         alert('booked successful')
            //         console.log('..........................booked succesful')
                   
                    
                

                    
                      
            //          })
                    
               
            
            //     // window.location.href = "http://localhost:8081/register.html"
            
            // })
        
            


         


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
            if(Booking_data.CarType =="" || Booking_data.passenger == "" ||  Booking_data.checkout =="" || Booking_data.checkin == "") {
                swal("Oops!", "Fill your empty Fields!", "error");
            }else{
fetch(`/bookcar?obj=${JSON.stringify(Booking_data)}`).then((response) => {
        
               
                
    response.json().then((data)=>{
                   
        console.log(data)
        // swal("Congratulations!", "Booking has been done!", "error");
        Alert2.render('Booking has been done')
        console.log('..........................booked succesful')
       
        
    

        
          
         })

               
            
                // window.location.href = "http://localhost:8081/register.html"
            
            })
            }
        
            

// fetch(`/bookcar?obj=${JSON.stringify(Booking_data)}`).then((response) => {
        
//     // alert('succesfull booked')
     

   
//     //      console.log(response.text())
//          response.json().then((data)=>{
                   
//             console.log(data)
//             alert('booked successful')
//             console.log('..........................booked succesful')
           
            
        

            
              
//              })
      

    
 
//      // window.location.href = "http://localhost:8081/register.html"
 
//  })

         


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
        document.getElementById('dialogboxfoot').innerHTML = '<button onClick = "Alert2.ok()">OK</button>';


    }
    this.ok = function() {
        
        
        window.location.href = "http://localhost:8081/mylist.html"
       

    }

    

}
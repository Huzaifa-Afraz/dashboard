// js to filter data
var filterBtn=document.querySelectorAll(".filter");
var toggleInput=document.querySelector(".filter_inputs");
filterBtn.forEach( itm=>{
    itm.addEventListener("click", ()=>{
        if(toggleInput.classList.contains("d-none")){
            toggleInput.classList.add("d-show")
            toggleInput.classList.remove("d-none")
        }
        else{
            toggleInput.classList.add("d-none");
            toggleInput.classList.remove("d-show")
        }
    })
});

// js for invite button
var invitebtn=document.querySelectorAll(".Invite");
invitebtn.forEach(itm=>{
    itm.addEventListener("click",()=>{
        if(itm.classList.contains("active")){
            var dnone=itm.querySelector(".inviteMain").classList.contains("d-none")
            // var dshow=itm.querySelector(".inviteMain").classList.contains("d-show")
                    if(dnone){
                        // alert("d-show")
                    // itm.addEventListener("click",()=>{
                        itm.querySelector(".inviteMain").classList.add("d-show");
                        itm.querySelector(".inviteMain").classList.remove("d-none");
                    // })
                }
                else{
                    // alert("d-none")
                    // itm.addEventListener("click",()=>{
                        itm.querySelector(".inviteMain").classList.add("d-none");
                        itm.querySelector(".inviteMain").classList.remove("d-show");    
                    // })
                }
                }
                else{
                    // alert("not found")
                }
    })
   
    
})



//js for detail by clicking on three dots

// var btn=document.querySelectorAll(".content");
// btn.forEach(itm=>{
    // alert("i am working")
    // var i=1;
    // console.log(i+1)
    // itm.querySelector(".threeDots").addEventListener("click",()=>{
    //     // alert("i am working")
    //    var singleitm= itm.querySelector(".dotsDetail")
    //    if(singleitm.classList.contains("d-none")){
    //     singleitm.classList.remove("d-none");
    //     singleitm.classList.add("d-show")
    //    }
    //    else{
    //     singleitm.classList.add("d-none");
    //     singleitm.classList.remove("d-show")
    //    }
    // })
// })
// js to click on email button
var emailbtn=document.querySelectorAll(".Email");
emailbtn.forEach(email=>{
   email.addEventListener("click",()=>{
// alert("working")
if(email.classList.contains("active")){
    var dnone=email.querySelector(".emailMain").classList.contains("d-none")
    
    // var dshow=itm.querySelector(".inviteMain").classList.contains("d-show")
            if(dnone){
                // alert("d-show")
            // itm.addEventListener("click",()=>{
                email.querySelector(".emailMain").classList.add("d-show");
                email.querySelector(".emailMain").classList.remove("d-none");
            // })
        }
        else{
            // alert("d-none")
            // itm.addEventListener("click",()=>{
                email.querySelector(".emailMain").classList.add("d-none");
                email.querySelector(".emailMain").classList.remove("d-show");    
            // })
        }
        }
        else if(email.classList.contains("close")){
            // alert("not found")
            if(email.querySelector(".emailMain").classList.contains("d-none")){
            email.querySelector(".emailMain").classList.add("d-show");
                email.querySelector(".emailMain").classList.remove("d-none"); 
                // alert("if not found")
            }
            else{
                // alert("else not found")
                // alert("d-none")
                // itm.addEventListener("click",()=>{
                    email.querySelector(".emailMain").classList.add("d-none");
                    email.querySelector(".emailMain").classList.remove("d-show");    
                // })
        }
    }})
})

// password data opn close
var invitebtn=document.querySelectorAll(".password");
invitebtn.forEach(itm=>{
    itm.addEventListener("click",()=>{
        if(itm.classList.contains("active")){
            var dnone=itm.querySelector(".passwordMain").classList.contains("d-none")
          
                    if(dnone){
                     
                        itm.querySelector(".passwordMain").classList.add("d-show");
                        itm.querySelector(".passwordMain").classList.remove("d-none");
                }
                else{
                        itm.querySelector(".passwordMain").classList.add("d-none");
                        itm.querySelector(".passwordMain").classList.remove("d-show");    
                }
                }
                else{
               
                }
    })
   
    
})

// login data opn close
var invitebtn=document.querySelectorAll(".login");
invitebtn.forEach(itm=>{
    itm.addEventListener("click",()=>{
        if(itm.classList.contains("active")){
            var dnone=itm.querySelector(".loginMain").classList.contains("d-none")
          
                    if(dnone){
                     
                        itm.querySelector(".loginMain").classList.add("d-show");
                        itm.querySelector(".loginMain").classList.remove("d-none");
                }
                else{
                        itm.querySelector(".loginMain").classList.add("d-none");
                        itm.querySelector(".loginMain").classList.remove("d-show");    
                }
                }
                else{
               
                }
    })
   
    
})


var dotsBtn=document.querySelectorAll(".content")
dotsBtn.forEach(itm=>{
    itm.addEventListener("click",()=>{
if(itm.querySelector(".dotsDetail").classList.contains("d-none")){
    // alert("yes contain")
    itm.querySelector(".dotsDetail").classList.add("d-show")
    itm.querySelector(".dotsDetail").classList.remove("d-none")
}
else{
    itm.querySelector(".dotsDetail").classList.add("d-none")
    itm.querySelector(".dotsDetail").classList.remove("d-show")
}
    })
})

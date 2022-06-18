let ravan=JSON.parse(localStorage.getItem("userData"))


// let take=document.querySelector("#nav");
// take.innerHTML=ravan.name;

document.querySelector("#form").addEventListener("submit",signInData)

function signInData(){
    event.preventDefault();

   let comeon={
     email : document.querySelector("#email").value,
     password : document.querySelector("#password").value,
   }

    if(ravan==null){
    alert("Create account");
    }
    else if(ravan.email==comeon.email && ravan.password==comeon.password){
        alert("SiginIn Successfully");
        
        window.location.href="../homepage/index.html";  
    }
    else{
        alert("User Doesn't exists!!");
    }
}
        // function navone(){
        // const  kanipinchu = document.getElementById("visible");
        // const parent = kanipinchu.parentNode;
        // parent.removeChild(kanipinchu)
        // }
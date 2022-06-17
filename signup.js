function balayya(name,email,password,mobile){
    this.name=name;
    this.email=email;
    this.password=password;
    this.mobile=mobile;
}
let ravan=JSON.parse(localStorage.getItem("userData"))
let nagaraju=()=>{
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    // let repassword=document.querySelector("#repassword").value;
    let output=new balayya(name,email,password,mobile);
    localStorage.setItem("userData",JSON.stringify(output));
    alert("Account Successful Created");
    window.location.href="signin.html";

}
document.querySelector("form").addEventListener("submit",nagaraju)
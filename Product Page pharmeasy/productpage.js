var data=JSON.parse(localStorage.getItem("dataproduct"));
displaydata(data);


function displaydata(data){

var container=document.querySelector("#container");
data.forEach(function(el){
    var div=document.createElement("div");
    // var divimage=document.createElement("div");
    // divimage.setAttribute("class","divimage1");
var image=document.createElement("img");
image.src=el.image;
var title=document.createElement("h2")
title.innerText=el.title;
title.setAttribute("class","title");
var mrp=document.createElement("h3")
mrp.innerText=el.mrp;
mrp.setAttribute("class","mrp")
var price=document.createElement("h4")
price.innerText=el.price;
price.setAttribute("class","price")
// divimage.append(image);
div.append(image,title,mrp,price);
div.addEventListener("click",function(){
   nextpage(el);

})
container.append(div);


})



}

function nextpage(el){
    //var arr=[];
    //arr.push(el);
    console.log("clicked");
    console.log(el);
    window.location.href="./productquantity.html";
    localStorage.setItem("quantity",JSON.stringify(el));
}
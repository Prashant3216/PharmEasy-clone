var data=JSON.parse(localStorage.getItem("quantity"));
appenddata(data);

function appenddata(data){

var container=document.querySelector("#container");
var divimage=document.createElement("div");
var divdetails=document.createElement("div");
var buttondiv=document.createElement("div");
var viewcartdiv=document.createElement("div");

divdetails.setAttribute("class","divdetails");
viewcartdiv.setAttribute("class","button2");
divimage.setAttribute("class","image1");
buttondiv.setAttribute("class","button1");
var image=document.createElement("img");
image.src=data.image;
var title=document.createElement("h2");
title.innerText=data.title;
title.setAttribute("class","title");
var mrp=document.createElement("h3");
mrp.innerText=data.mrp;
mrp.setAttribute("class","mrp");
var price=document.createElement("h3");
price.innerText=data.price;
price.setAttribute("class","price");
var taxes=document.createElement("p");
taxes.innerText="Inclusive of all taxes"
var delivery=document.createElement("p");
delivery.innerText="Delivery by  Tomorrow, before 10:00 pm";
var button=document.createElement("button");
button.innerText="Add To Cart";
button.addEventListener("click",function(){
    addtocart(data);
})
var button1=document.createElement("button");
button1.innerText="View Cart  >";
button1.addEventListener("click",function(){
    window.location.href="../Product Page pharmeasy/cart.html"
})



viewcartdiv.append(button1);
divimage.append(image);
buttondiv.append(button);
divdetails.append(title,mrp,taxes,price,delivery);
container.append(divimage,divdetails,buttondiv,viewcartdiv);



}

function addtocart(data){
    alert("Product added to Cart");
    // window.location.href="./cart.html";
    var x=data;
    localStorage.setItem("adddata",JSON.stringify(x));
}
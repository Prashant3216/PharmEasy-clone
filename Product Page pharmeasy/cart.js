var data=JSON.parse(localStorage.getItem("adddata"));
var addcontainer=document.querySelector("#addcontainer");
var image=document.createElement("img");
image.src=data.image;
var title=document.createElement("h2");
title.innerText=data.title;

var mrp=document.createElement("h3");
mrp.innerText=data.mrp;
var price=document.createElement("h3");
price.innerText=data.price;
addcontainer.append(image,title,mrp,price);
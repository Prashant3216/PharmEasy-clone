var data=JSON.parse(localStorage.getItem("adddata"));
console.log(data)

var addcontainer=document.querySelector("#addcontainer");

var image=document.createElement("img");
image.src=data.image;

var title=document.createElement("h2");
title.innerText=data.title;
title.setAttribute("id","title")

var mrp=document.createElement("h3");
mrp.innerText=data.mrp;

var price=document.createElement("h3");
price.innerText=data.price;

var btn=document.createElement("button")
btn.innerText="Proceed to buy"
btn.setAttribute("id","btn1")
btn.addEventListener("click",function(){
    window.location.href=""
})

let div=document.createElement("div")

div.append(title,mrp,price,btn)
div.setAttribute("id","box66")

addcontainer.append(image,div);
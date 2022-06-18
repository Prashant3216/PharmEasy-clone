var img604=document.getElementById("img604")
img604.src="./images/6.jpg"
var counter=1;
function set_time(){
  setInterval(image_show,2000);
} 

function image_show(){
  var image_data;
  
    if(counter==1){
      image_data="./images/1.png"
      img604.src=""+image_data;
    }

    else if(counter==2){
      image_data="./images/2.jpg"
      img604.src=""+image_data;
    }
    else if(counter==3){
      image_data="./images/3.jpg"
      img604.src=""+image_data;
    }
    else if(counter==4){
      image_data="./images/4.jpg"
      img604.src=""+image_data;
    }
    else if(counter==5){
      image_data="./images/5.jpg"
      img604.src=""+image_data;
    }
    else if(counter==6){
      image_data="./images/6.jpg"
      img604.src=""+image_data;
    }
    else if(counter==7){
      image_data="./images/7.jpg"
      img604.src=""+image_data;
    }
    else if(counter==8){
      image_data="./images/8.jpg"
      img604.src=""+image_data;
    }
    else{
      counter=1;
      image_data="./images/2.jpg"
      img604.src=""+image_data;
    }
  
    counter++;
  
}

let username=JSON.parse(localStorage.getItem("userData"))
let p=document.getElementById("box655")
// console.log(username.name)
// p.innerText=username.name;



// img1: https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg
// img2:https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg
// img3:https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg
// img4:https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg



// let container604= document.getElementById("container604");

// const swiper = new Swiper('.swiper', {
//     autoplay:{
//         delay : 3000,
//         disableOnInteraction:false,

//     },
//     loop: true,
  
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
//     },
    
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
    
//   });

var img604=document.getElementById("img604")
img604.src="./images/4.jpg"
var counter=1;
function set_time(){
  setInterval(image_show,3000);
} 

function image_show(){
  var image_data;
  
    if(counter==1){
      image_data="./images/1.jpg"
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
    else{
      counter=1;
      image_data="./images/3.jpg"
      img604.src=""+image_data;
    }
  
    counter++;
  
}




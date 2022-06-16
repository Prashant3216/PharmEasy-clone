// img1: https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg
// img2:https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg
// img3:https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg
// img4:https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg



// let container604= document.getElementById("container604");

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay : 3000,
        disableOnInteraction:false,

    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
  });
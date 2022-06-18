var img604=document.getElementById("img604")
img604.src="https://cms-contents.pharmeasy.in/banner/e13fa8363bf-EQUAL-JUNE-CB.png"
var counter=1;
function set_time(){
  setInterval(image_show,2000);
} 

function image_show(){
  var image_data;
  
    if(counter==1){
      img604.src="https://cms-contents.pharmeasy.in/banner/df6e3ec2e80-FDCB.jpg?dim=700x0&dpr=1&q=100";
    }

    else if(counter==2){
      img604.src="https://cms-contents.pharmeasy.in/banner/ea0bf711eed-Vicks-cb-may.jpg";
    }
    else if(counter==3){
      img604.src="https://cms-contents.pharmeasy.in/banner/8aa83ea6c7e-Moov-June-Coupon.jpg";
    }
    else if(counter==4){
      img604.src="https://cms-contents.pharmeasy.in/banner/627c570ceec-Plum-M-M.jpg";
    }
    else if(counter==5){
      img604.src="https://cms-contents.pharmeasy.in/banner/de6cc279933-Upakarma-CB-june.jpg";
    }
    else if(counter==6){
      img604.src="https://cms-contents.pharmeasy.in/banner/3ab35ad135a-Cremaffin-June-SRP.jpg";
    }
    else if(counter==7){
      img604.src="https://cms-contents.pharmeasy.in/banner/0c2c1348a87-OneTouch-CB-June22.png";
    }
    else if(counter==8){
      img604.src="https://cms-contents.pharmeasy.in/banner/7076307845f-Johnson-CB-Mar22.jpg";
    }
    else{
      counter=1;
      img604.src="https://cms-contents.pharmeasy.in/banner/26d88c347d7-Colgate-Diab.jpg";
    }
  
    counter++;
  
}

let username=JSON.parse(localStorage.getItem("userData"))
let p=document.getElementById("box655")
// console.log(username.name)
// p.innerText=username.name;



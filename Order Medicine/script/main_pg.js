var img604=document.getElementById("img604")
img604.src="https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg"
var counter=1;
function set_time(){
  setInterval(image_show,3000);
} 

function image_show(){
  var image_data;
  
    if(counter==1){
      img604.src="https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg";
    }

    else if(counter==2){
      // image_data="./images/2.jpg"
      img604.src="https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg";
    }
    else if(counter==3){
      // image_data="./images/3.jpg"
      img604.src="https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg";
    }
    else if(counter==4){
      // image_data="./images/4.jpg"
      img604.src="https://consumer-app-images.pharmeasy.in/marketing/comp_50lac.jpg";
    }
    else{
      counter=1;
      // image_data="./images/3.jpg"
      img604.src="https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg";
    }
  
    counter++;
  
}

var data1 = [
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/B44899/horlicks-protein-plus-vanilla-flavour-powder-400gm-2-1654077543.jpg",
  title: "Horlicks Protein Plus Vanilla Flavour Powder 400gm",
  mrp: "MRP ₹550.00",
  price :"₹500.50"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/369035/perfectil-skin-care-tablets-box-of-30-2-1654077709.jpg",
  title: "Perfectil Skin Care Tablets Box Of 30",
  mrp: "MRP ₹570.00",
  price :"₹456.50"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I04895/horlicks-lite-malt-450-gm-jar-2-1654168735.jpg",
  title: "Horlicks Lite Malt 450 Gm Jar",
  mrp: "MRP ₹325.00",
  price : "₹299.00"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I10379/wellman-hairfollic-hair-supplement-tablets-box-of-30-2-1654167680.jpg",
  title: "Wellman Hairfollic  Hair Supplement Tablets  Box Of 30",
  mrp: "MRP ₹900.00",
  price : "₹720.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/U41756/dettol-fresh-lather-shaving-cream-box-of-78-g-60g-18g-free-2-1654233581.jpg",
  title: "Dettol Liquid Disinfectant Surface Disinfection",
  mrp: "MRP ₹193.00",
  price : "₹162.00"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/091760/horlicks-health-nutrition-drink-chocolate-carton-500-g-1-1654078796.jpg",
  title: "Horlicks Health & Nutrition Drink, Chocolate, Carton 500 G",
  mrp: "MRP ₹290.00",
  price : "₹275.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/X15038/wellwoman-micronutrients-evening-primrose-oil-and-starflower-oil-30-capsules-2-1641789061.jpg",
  title: "Wellwoman - Micronutrients, Evening Primose-30 Capsules",
  mrp: "MRP ₹626.00",
  price : "₹532.35"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I41111/horlicks-protein-plus-chocolate-carton-200-g-1-1641788266.jpg",
  title: "Horlicks Protein Plus Chocolate Carton, 200 G",
  mrp: "MRP ₹255.00",
  price : "₹240.30"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-1-1654168794.jpg",
  title: "Revital H Women Multivitamin With Calcium,30 Tablets",
  mrp: "MRP ₹120.00",
  price : "₹102.00"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg",
  title: "Revital H Men Multivitamin With Calcium,(30 Capsules)",
  mrp: "MRP ₹310.00",
  price : "₹263.50"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I04915/horlicks-health-nutrition-drink-jar-500-g-2-1654168245.jpg",
  title: "Horlicks Health & Nutrition Drink Jar, 500 G",
  mrp: "MRP ₹320.00",
  price : "₹295.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/D95288/onetouch-select-plus-simple-glucometer-with-10-free-strips-2-1645456739.jpg",
  title: "Onetouch Select Simple Glucometer With 10 Free Strips",
  mrp: "MRP ₹1390.00",
  price : "₹861.80"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/131720/onetouch-ultra-glucometer-test-strips-25s-pack-1-1654078584.jpg",
  title: "Onetouch Ultra Glucometer Test Strips 25s Pack",
  mrp: "MRP ₹875.00",
  price : "₹796.25"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I35832/digene-gel-acidity-gas-relief-200ml-mixed-fruit-flavour-2-1651912169.jpg",
  title: "Digene Gel Acidity & Gas Relief - 200ml Mixed Fruit ",
  mrp: "MRP ₹131.00",
  price : "₹90.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/B84375/digene-ultra-fizz-lemon-antacid-sachet-of-625-g-2-1654252286.jpg",
  title: "Digene Ultra Fizz Lemon Antacid  Sachet Of 6.25 G",
  mrp: "MRP ₹10.00",
  price : "₹8.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/I04914/horlicks-health-nutrition-drink-jar-1-kg-2-1654168855.jpg",
  title: "Horlicks Health & Nutrition Drink Jar, 1 Kg",
  mrp: "MRP ₹285.00",
  price : "₹265.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/B06506/accusure-stethoscope-st-01-1-1654252235.jpg",
  title: "Accusure Stethoscope St-01",
  mrp: "MRP ₹599.00",
  price : "₹281.33"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/C19475/horlicks-chocolate-delight-powder-refill-1-kg-2-1654077413.jpg",
  title: "Horlicks Chocolate Delight Powder Refill 1 Kg",
  mrp: "MRP ₹290.00",
  price : "₹285.40"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/T85923/accusure-simple-blood-glucose-test-strip-25-strips-1-1654233718.jpg",
  title: "Accusure Simple Blood Glucose Test Strip - 25 Strips",
  mrp: "MRP ₹595.00",
  price : "₹416.20"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/Z11343/horlicks-junior-health-nutrition-drink-vanilla-1-kg-2-1654232883.jpg",
  title: "Horlicks Junior Health & Nutrition Drink Vanilla, 1 Kg",
  mrp: "MRP ₹265.00",
  price : "₹255.70"
  },
  { image:"https://cdn01.pharmeasy.in/dam/products_otc/Y43761/accusure-fingertip-pulse-oximeter-yk011-2-1654232983.jpg",
  title: "Accusure Fingertip Pulse Oximeter - Yk011",
  mrp: "MRP ₹3999.00",
  price : "₹879.78"
  }
  
  ]

let id;

function search(){

  let query=document.getElementById("input602").value;
  
     return data1;
}

function append(data){
  let box651=document.getElementById("box651");
  box651.style.backgroundColor= "white";
  box651.style.overflow="scroll"
  box651.innerHTML=null;

  data.forEach(function(el){

    let p=document.createElement("p")
    p.innerText=el.title;
    p.setAttribute("id","p650")
    p.addEventListener("click",function(){
      adddata(el);
      window.location.href="../Product Page pharmeasy/productquantity.html"
    })

    box651.append(p)

  })
}

function main(){
  let data= search();

  append(data)
}

function debouncing(func,delay){
if(id){
  clearTimeout(id);
}
id= setTimeout(function(){
  func();
},delay)
}

function adddata(el){

  let x=el;

  localStorage.setItem("quantity",JSON.stringify(x))
}





import navbar from "/PharmEasy.com/navbar/navbar1.js";

let navb = document.getElementById("navbar1574");
navb.innerHTML = navbar();

let slideIndex = 0;
// manual showSlide
function carosual(val) {
  let slides = document.getElementsByClassName("slide1502");
  let dots = document.getElementsByClassName("dots1506");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    //removing of class "active".
    dots[i].className = dots[i].className.replace(" active", "");
    // console.log(dots[i].className)
  }
  slides[slideIndex - 1].style.display = "block";
  // adding class e.g before class="dots1506" become class="dots1506 active"
  dots[slideIndex - 1].className += " active";
}
let plusSlide = (n) => {
  carosual((slideIndex += n));
};
let currentSlide = (n) => {
  carosual((slideIndex = n));
};

let prev = document.getElementById("prev1503");
prev.addEventListener("click", function () {
  plusSlide(-1);
});
let next = document.getElementById("next1504");
next.addEventListener("click", function () {
  plusSlide(1);
});

let dots = document.getElementsByClassName("dots1506");
// console.log(dots);
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    currentSlide(i + 1);
  });
}

// automatic showSlide

let showSlide = () => {
  let slides = document.getElementsByClassName("slide1502");
  let dots = document.getElementsByClassName("dots1506");
  // console.log(slides)
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    //removing of class "active".
    dots[i].className = dots[i].className.replace(" active", "");
    // console.log(dots[i].className)
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  // adding class e.g before class="dots1506" become class="dots1506 active"
  dots[slideIndex - 1].className += " active";
  // console.log(dots[slideIndex-1].className)

  setTimeout(showSlide, 3000);
};
showSlide();

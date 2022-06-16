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
  for (i = 0; i < slides.length; i++) {
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

// automatic showSlide

let showSlide = () => {
  let slides = document.getElementsByClassName("slide1502");
  let dots = document.getElementsByClassName("dots1506");
  // console.log(slides)
  for (i = 0; i < slides.length; i++) {
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

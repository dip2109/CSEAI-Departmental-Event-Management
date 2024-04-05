// const left1 = document.querySelector('.left1');
// const right1 = document.querySelector('.right1');
// const slider = document.querySelector('.slider');

let slideIndex = 0;
showSlides();

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n) {
    slideIndex = n;
  } else {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}

// Change slide when clicking on dots
function currentSlide(n) {
  showSlides(n);
}

// Automatic slideshow
function startSlideShow() {
  setInterval(showSlides, 2000); // Change image every 2 seconds
}

// Start the automatic slideshow
startSlideShow();

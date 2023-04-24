//Reveal effect

function reveal() {
  var rev = document.querySelectorAll('.rev');

  for (var i = 0; i < rev.length; i++) {
    var windowH = window.innerHeight;
    var eTop = rev[i].getBoundingClientRect().top;
    var eVisible = 100;

    if (eTop < windowH - eVisible) {
      rev[i].classList.add('active');
    } else {
      rev[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

//Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide_show');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

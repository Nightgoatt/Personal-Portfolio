function reveal() {
  var rev = document.querySelectorAll('.rev');

  for (var i = 0; i < rev.length; i++) {
    var windowH = window.innerHeight;
    var eTop = rev[i].getBoundingClientRect().top;

    if (eTop < windowH) {
      rev[i].classList.add('active');
    } else {
      rev[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

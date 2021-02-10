import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});
const footer = document.querySelector('.footer__text');
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} <a href="https://github.com/mishhubc"> </a>and<a href="https://github.com/covidev" target="_blank"></a> </a>`;

initSr();
initTilt();

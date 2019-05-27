// Responsive nav

$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function (e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling

$('.cf a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});





var up = document.getElementById("up");

up.onclick = function () {
  // 'use strict';
  var count = 0;

  var x = setInterval(function () {
    'use strict';

    window.scrollTo(0, scrollY - count);



    count++;

    if (scrollY == 0) {
      clearInterval(x);
    }

  }, 7);

};
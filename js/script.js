$(document).ready(function(){
  $('.partners').slick({

  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });


  // to toggle menu items on mobile viewports
  $('.hamburger').on('click', function(){
    $('.global-nav__menu').toggleClass('show');
  });


    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.top').fadeIn();
      } else {
        $('.top').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

  });


//to slide slowly to the named anchor
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});





  
  
  

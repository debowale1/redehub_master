$(document).ready(function(){


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false,
            loop:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
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
//end document ready function

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

// slideout mobile slider
 $(function(){
    //Mobile slider
    var slideout = new Slideout({
      'panel': document.getElementById('main'),
      'menu': document.getElementById('mobile-menu'),
      'padding': 256,
      'side': 'right',
      'tolerance': 70
    });

    // Toggle button
    $('.hamburger').on('click', function() {
        $('#mobile-menu').fadeToggle()
        slideout.toggle();
    });

});





  
  
  

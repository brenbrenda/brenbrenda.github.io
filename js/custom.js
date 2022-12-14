
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* template navigation
  -----------------------------------------------*/
 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* Navigation visible on Scroll */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }
    

   /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /*  smoothscroll
  ----------------------------------------------*/
   $(function() {
        $('.navbar-default a, #about a, #overview a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#about').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#resume').parallax("100%", 0.2);
    $('#skills').parallax("100%", 0.3);
    $('#blog').parallax("100%", 0.1);
    $('#price').parallax("100%", 0.2);
    $('#sideProjects').parallax("100%", 0.2);

  }
  initParallax();


   /* about slider section
  -----------------------------------------------*/
  $(function(){
    jQuery(document).ready(function() {
    $('#about').backstretch([
       "images/home-bg-slider-img1.jpg", 
       "images/home-bg-slider-img2.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })


  /* Owl Carousel */
  $(document).ready(function() {
    $("#owl-sideProjects").owlCarousel({
      autoPlay: 6000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });
  });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });


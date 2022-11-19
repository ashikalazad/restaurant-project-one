$(document).ready(function ($) {

  // owl slider

  $(".homepage-slides").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    autoplay: true,
  });

  // isotope

  $('.projects-list').isotope();

  $(".projects-titles li").on('click',function(){
    var selector = $(this).attr('data-filter');
    $(".projects-list").isotope({
      filter: selector
    });
  });

  // magnific popup

  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true},
    zoom: {enabled: true},
    duration: 500,
    easing: 'ease-in-out'
  });

  // click color change function

  $('.projects-titles li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})
  

});
jQuery(document).ready(function() {
    $('.menu').on('click', function() {
      $('.mobile_nav').toggleClass('on-show');
      $('body').toggleClass('overflow-hidden');
    });      
    $('.close_menu').on('click', function() {
      $('.mobile_nav').toggleClass('on-show');
      $('body').toggleClass('overflow-hidden');
    });

});
$(function(){
  $('span').click(function(){
    if($('.menu-wrapper').hasClass('open')){
      $('.menu-wrapper').removeClass('open');
      $('.menu-wrapper').slideUp(300);
      $(this).text('M');
    }else {
      $('.menu-wrapper').addClass('open');
      $('.menu-wrapper').slideDown(300);
      $(this).text('X');
    };
  });
});

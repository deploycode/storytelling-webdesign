function myFunction(){
  $("#pizarra").addClass('pizarra-on');
  $('#title').css({'padding-top':'40px', 'transition':'2s'});
  // $('.estatico').css({'position':'relative'});
  var alto = window.innerHeight;
  $('body, html').animate({
    scrollTop: alto
  }, 1000);
};

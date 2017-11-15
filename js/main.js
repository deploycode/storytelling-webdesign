function myFunction(){
  $("#pizarra").addClass('pizarra-on');
  $("#pizarra").removeClass('pizarra-off');
  // $('#title').css({'padding-top':'40px', 'transition':'2s'});
  // $('.estatico').css({'position':'relative'});
  var alto = window.innerHeight;
  $('body, html').animate({
    scrollTop: alto
  }, 1000);
  // $('#tracesvg').css({'top':alto});

};
// function spacePoints(space){
//   $(".imap").css('margin-bottom':$space ';');
// }

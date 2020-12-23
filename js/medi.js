$(function(){
//메뉴
  $('.tabM h3').click(function(){
      $('.tabM h3').removeClass('on');
      $(this).addClass('on');
      
      var i = $(this).index();
      
      $('.tabC > div').hide();
      $('.tabC > div').eq(i).show();
  });
  
//퀵메뉴 스크롤해도 그 자리에 위치 (플로팅바)
  //var sec5Top = $('.sec5').css('top');    
  var sec5Top = parseInt($('.sect5').css('top'));    
  $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      
      $('.sect5').stop().animate({'top':sec5Top+winTop+'px'}, 400);
      //console.log(sec5Top);
      //console.log(winTop);
  });
});
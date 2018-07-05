$(document).ready(function(){
  bxslider();
  navH();
  navBtnM();
  navMedia();
  navMemuSub();
  scroll();
  topBtn();
});
$(window).resize(function(){
  var winW = $(window).width();
  var winH = $(window).height();
  if(winW < 1170){
    navM();
  } else {
    navH();
    $(".navM").hide();
  }
  //$(".nav").height("auto");
});
function navMedia() {
  var winW = $(window).width();
  if (winW < 1170) {
    navM();
  } else {
    navH();
  }
}
function bxslider() {
  var winW = $(window).width();
  $('.bxslider').bxSlider({
    mode:'fade',
    auto:true,
    pause:5000,
    speed:300,
    pager:true,
    onSliderLoad: function() {
      $('.bxslider').css('visibility', 'visible');
    }
  });
  $('.slider4').bxSlider({
    slideWidth: 165,
    minSlides: 2,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 20,
    auto:true,
    controls:false,
  });
}
function navH() {
  $(".nav > li").bind("mouseover focusin",function(){
    $(this).children(".navInner").stop().fadeIn(200);
    $(this).children("a").addClass("on");
  })
  $(".nav > li").bind("mouseout focusout",function(){
    $(this).children(".navInner").stop().fadeOut(200);
    $(this).children("a").removeClass("on");
  });
}
function navBtnM() {
  $(".navBtnM").click(function(){
	if($(".navM").is(":visible")){
		$(".navM").slideUp();
    }else {
		$(".navM").slideDown();
	}
  });
}
function navM(){
  $(".nav > li").unbind("mouseenter mouseleave");
  $(".nav > li").click(function(){
    $(".nav > li").children(".navInner").stop().hide();
    $(this).children(".navInner").stop().slideDown();
  });
}
function navMemuSub() {
  $(".navM > li").click(function(){
	var here = $(this).children(".navMInner");
	$(".navM > li").children(".navMInner").slideUp();
	$(this).children("i").removeClass("fa fa-angle-right");
	if( here.is(":visible")) {
	    $(this).children("i").removeClass("fa fa-angle-right");
	} else {
		$(this).children("i").removeClass("fa fa-angle-down");
		here.slideDown();
	}
  });
}
function scroll() {
  var delta = 300;
  var timer = null;
  $(window).scroll(function(){
    var winSt =$(window).scrollTop();
    if (winSt >150) {
      $(".headerWrap").addClass("onHead");
      $(".pad").addClass("padScroll");
      //$(".displayCounter").addClass("onCounter");
    } else {
      $(".headerWrap").removeClass("onHead");
      $(".pad").removeClass("padScroll");
    }
    if(winSt > 200 && winSt < 300){
      clearTimeout( timer );
      timer = setTimeout( animateNum, delta );
    }
  });
}
function animateNum(){
    $('#counter1').stop().animateNumber({ number: 674 }, 2000);
    $('#counter2').stop().animateNumber({ number: 976 }, 2000);
    $('#counter3').stop().animateNumber({ number: 375 }, 2000);
    $('#counter4').stop().animateNumber({ number: 186 }, 2000);
}
function topBtn(){
  $(".topBtn").click(function(){
    $("body").animate({"scrollTop":0});
  });
}

$(document).ready(function(){
  nav_hover1();
  nav_hover2();
  slideH();
  navBtnM();
  header_scroll();
  tabs();
  topBtn();
  aniBtn_prev();
  aniBtn_next();
  vod_img();
  vod_img_size();
  accodian();
  ie8();
  var winW = $(window).width();
  if (winW < 1140) {
    navM();
  } else{
    $(".bg").hide();
  }
});
$(window).resize(function(){
  var winW = $(window).width();
  var winH = $(window).height()
  if(winW < 1140){
    navM();
    $(".nav").hide();
	$(".bg").hide();
  }
  else {
    nav_hover1();
    nav_hover2();
    $(".bg").hide();
    $(".nav").show();
  }
  $(".nav").height("auto");
  $(".navInner").height("auto");
  //$(".bxslider li, .bx-viewport, .bx-wrapper").height(winH);
  $(".bxslider li").width(winW);
  slideH();
  vod_img_size();
});
function nav_hover1() {
  $(".nav > li").hover(function(){
    $(this).children(".navInner").stop().fadeIn(200);
    $(this).children("a").addClass("on");
  }, function(){
    $(this).children(".navInner").stop().fadeOut(200);
    $(this).children("a").removeClass("on");
  });
}
function nav_hover2() {
  $(".nav > li").focusin(function(){
    $(this).children(".navInner").stop().fadeIn(200);
    $(this).children("a").addClass("on");
  });
  $(".nav > li").focusout(function(){
    $(this).children(".navInner").stop().fadeOut(200);
    $(this).children("a").removeClass("on");
  });
}
function slideH() {
  var winH = $(window).height();
  var headH = $(".headerWrap").height();
  $(".bxslider li, .bx-viewport, .bx-wrapper").height(winH-headH-300);
}
function navBtnM() {
  $(".navBtnM").click(function(){
    var navW = $(".nav").width();
    var winW = $(window).width();
    var winH = $(window).height();
    $(".nav").css({"right":-navW,"height":winH,"display":"inline-block"});
    $(".bg").show();
    $(".nav").animate({"right":"0"}, 500);
  });
  $(".closeBtn").click(function(){
    var navW = $(".nav").width()+1;
    $(".nav").animate({"right":-navW}, 500);
    $(".bg").hide();
  });
  $(".bg").click(function(){
	var navW = $(".nav").width()+1;
    $(".nav").animate({"right":-navW}, 500);
    $(".bg").hide();
  });
}
function navM(){
  $(".header > .nav").unbind();
  $(".nav > li").unbind();
  $(".nav > li").click(function(){
    $(".nav > li").children(".navInner").stop().slideUp();
    $(this).children(".navInner").stop().slideDown();
  });
}
function header_scroll() {
  $(window).scroll(function(){
    var winSt =$(window).scrollTop();
    if (winSt > 78) {
      $(".headerWrap").stop().addClass("onHead");
      //$(".displayCounter").addClass("onCounter");
    } else {
      $(".headerWrap").stop().removeClass("onHead");
    }
  });
}
function tabs(){
    $(".stWrap2 .stL .tabs li").click(function(){
      var num = $(this).index();
      $(".stWrap2 .stL .tabs li a").removeClass("on");
      $(this).children("a").addClass("on");
      $(".stWrap2 .stL .tabTextWrap > div").hide();
      $(".stWrap2 .stL .tabTextWrap > div").eq(num).show();
    });
}
function topBtn(){
  $(".topBtn").click(function(){
    $("html, body").stop().animate({"scrollTop":0});
  });
}
function aniBtn_prev(){
  $(".aniBtn .prev").click(function(){
    if ($(".slide01 .mid").css("display")=="block") {
      $(".slide01 .mid").hide();
      $(".textAni p").animate({"animation":"none","opacity":"1"});
    } else {
      $(".slide01 .mid").css({"animation":"none"});
      $(".textAni p").animate({"opacity":"0"});
      $(".slide01 .mid").fadeIn();
    }
  });
}
function aniBtn_next(){
  $(".aniBtn .next").click(function(){
    if ($(".slide01 .mid").css("display")=="block") {
      console.log(1);
      $(".slide01 .mid").hide();
      $(".textAni p").animate({"animation":"none","opacity":"1"});
    } else {
      $(".slide01 .mid").css({"animation":"none"});
      $(".textAni p").animate({"opacity":"0"});
      $(".slide01 .mid").fadeIn();
    }
  });
}
function vod_img(){
  $(".vodImg").click(function(){
    $(this).fadeOut();
    $(".vodBox iframe").attr("src","https://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1");
  });
}
function vod_img_size(){
  var vodSize = $(".vodBox iframe").width()/2;
  $(".vodBox .vodImg, .vodBox iframe").css({"margin-left":-vodSize});
}
function accodian() {
  $(".accodian dt").click(function(){
    $(".accodian dt").removeClass("on");
    $(this).addClass("on");
    var acc = $(this).next("dd");
    $(".accodian dd").stop().slideUp();
    acc.stop().slideDown();
    if(acc.length) // acc에 값이 있으면 if 안에 값 실행
    {
      acc.children();
    }
  });
}
function ie8(){
	$(".ie8 .closeBtn").click(function(){
		$(".ie8").fadeOut();
	});
}

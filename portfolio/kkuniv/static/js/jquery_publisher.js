 $(document).ready(function() {
   subLnb();
   quickBtn();
   m_mainMenu();
   m_home_btn();
   browserA();
   pcMenu();
   pcMenuSliding();
   subTabMenu();
   m_title();
   responsive();
 });
 /*
 // 창 사이즈 변경 시 기능 적용
 var resizeTimer;
 $(window).resize(function() {
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(function(){
	   var winW = $(window).width();
	   if (winW >= 1100) {
		   $(".bg").hide();
	   } else if (winW < 1100){
		 //m_nav_click();
		 //nav_hover();
		 $("#m_mainMenu").css({"right":"-100%"});
		 $(".bg").hide();
		 $(".mainMenu ul > li, .headGnbSub").unbind();
	   }
   }, 500);
 });
 */
 var winW = $(window).width();
 var winH = $(window).height();
 $(window).resize(function(){
   winW = $(window).width();
   winH = $(window).height();
   responsive();
   subLnb();
 });
 function responsive() {
   if( winW < 1100 ){
     $("body").addClass("sizeM");
   } else {
     $("body").removeClass("sizeM");
   }
 }
 // 모바일 타이틀
 function m_title() {
   var title = $(".m_title").width()/2-2;
   console.log(title);
   $(".m_title").css({"margin-left":-title});
 }
 // 서브 탭메뉴
 function subTabMenu() {
   $(".contentBoxSub .tabMenu li").click(function(){
     var num = $(this).index()+1;
     console.log("dd");
     $(".contentBoxSub .tabContent").hide();
     $(".contentBoxSub .tabCon0"+num).show();
     $(".contentBoxSub .tabMenu li").removeClass("on");
     $(this).addClass("on");
   });
 }
 // sub페이지 lnb메뉴 높이값 //
 function subLnb() {
   var conH = $("#container").height();
   $("#lnb").height(conH);
 }
 // 퀵 메뉴
 function quickBtn() {
   $(".quick01").bind("mouseover focusin", function() {
     $(this).attr("src", "../../static/images/common/quick_btn_on01.png");
   });
   $(".quick01").bind("mouseout focusout", function() {
     $(this).attr("src", "../../static/images/common/quick_btn01.png");
   });
   $(".quick02").bind("mouseover focusin", function() {
     $(this).attr("src", "../../static/images/common/quick_btn_on02.png");
   });
   $(".quick02").bind("mouseout focusout", function() {
     $(this).attr("src", "../../static/images/common/quick_btn02.png");
   });
   $(".quick03").bind("mouseover focusin", function() {
     $(this).attr("src", "../../static/images/common/quick_btn_on03.png");
   });
   $(".quick03").bind("mouseout focusout", function() {
     $(this).attr("src", "../../static/images/common/quick_btn03.png");
   });
   $(".quick04").bind("mouseover focusin", function() {
     $(this).attr("src", "../../static/images/common/quick_btn_on04.png");
   });
   $(".quick04").bind("mouseout focusout", function() {
     $(this).attr("src", "../../static/images/common/quick_btn04.png");
   });
 }
 // pc 메뉴
 function pcMenu() {
   $(".mainMenu ul > li, .headGnbSub").bind("mouseover focusin", function() {
     $(".headGnbSub").stop().slideDown(300);
   });
   $(".mainMenu ul > li, .headGnbSub").bind("mouseout focusout", function() {
     $(".headGnbSub").stop().slideUp(300);
   });
   $(".mainMenu ul > li a").bind("mouseover focusin", function() {
     $(this).addClass("on");
   });
   $(".mainMenu ul > li a").bind("mouseout focusout", function() {
     $(this).removeClass("on");
   });
 }
 // 메뉴 클릭 시 하위 메뉴 보이기
 function m_nav_click() {
   $(".mainMenu ul > li").click(function() {
     $(this).children(".subMenu").stop().slideDown();
   });
 }
 // 모바일 왼쪽 메뉴아이콘 클릭시 메뉴 보이기
 function m_mainMenu() {
   var sub_menu = $(".subMenu");
   $("#m_mainMenu ul li .m_nav_btn").click(function() {
     $(".subMenu").slideUp("fast", function() {});
     $(".deph").slideUp("fast", function() {});
     $("#m_mainMenu ul li .m_nav_btn").removeClass("on");
     if ($(this).siblings('.subMenu').is(":visible")) {
       $(this).siblings(".subMenu").slideUp("fast", function() {});
       $(this).removeClass("on");
     } else {
       $(this).siblings(".subMenu").slideDown("fast", function() {});
       $(this).addClass("on");
     }
   });
   $(".m_menu_btn").click(function() {
     var m_mainMenu = $("#m_mainMenu");
     var menu_size = m_mainMenu.width();
     //$(".bg").hide();
     if (m_mainMenu.css('right') == '0px') {
       $(".bg").hide();
       m_mainMenu.stop().animate({
         "right": '-100%'
       }, 300);
     } else {
       $(".bg").show();
       m_mainMenu.stop().animate({
         "right": 0
       }, 300);
       $(".bg").click(function() {
         $(this).hide();
         m_mainMenu.stop().animate({
           "right": '-100%'
         }, 300);
       });
       //$("html").css({"overflow-y":"hidden"});
     }
     $(".closeBtn").click(function(){
       m_mainMenu.stop().animate({
         "right": -menu_size
       }, 300);
       //$(".bg").hide();
       //$("html").css({"overflow-y":"scroll"});
     });
   });
 }
 // 모바일 하위메뉴보기 클릭 시 하위메뉴 보이기
 function m_home_btn() {
   $(".homeBtn").click(function() {
     $(".subMenu").slideUp("fast", function() {});
     var deph = $(".deph");
     if (deph.is(":visible")) {
       deph.slideUp("fast", function() {});
     } else {
       deph.slideDown("fast", function() {});
     }
   });
 }
 // ie8이하 안내메시지 팝업 닫기
 function browserA() {
   $('.browserBtnBox02 button,.browserCloseBtn').on('click', function() {
     $('.browserBox').fadeOut(200);
   });
 }
 // 배경색상이 있을 경우 스크롤 없애기
 function bg() {
   if ($(".bg").is(":visible")) {
     $('html').css({
       "overflow-y": "hidden",
       "overflow-x": "hidden"
     });
   } else {
     $('html').css({
       "overflow-y": "auto",
       "overflow-x": "auto"
     });
   }
   $(".bxslider li").css({
     "width": "100%"
   });
 }
// pc gnb 메뉴 아래 슬라이딩
function pcMenuSliding() {
	$(".mainMenu, .mainMenu .depth1").bind("focusin mouseover", function(){
		  if($(".mainMenu .subGnb").hasClass("onFocus")){
      } else {
        //$(".mainMenu .subGnb").addClass("onFocus");
        $(".mainMenu .subGnb").stop().slideDown();
        $(".mainMenu .bgLeft").addClass("onSlider");
      }
	});
	$(".mainMenu, .mainMenu .depth1").bind("focusout mouseout", function(){
    if($(".mainMenu .subGnb").hasClass("onFocus")){
      //$(".mainMenu .subGnb").removeClass("onFocus");
      $(".mainMenu .bgLeft").removeClass("onSlider");
    } else {
    }
    $(".mainMenu .subGnb").stop().slideUp();
	});
}

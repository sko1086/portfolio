 $(document).ready(function() {
   quickBtn();
   m_mainMenu();
   m_home_btn();
   browserA();
   pcMenu();
   pcMenuSliding();
 });
 /*
 // 창 사이즈 변경 시 기능 적용
 var resizeTimer;
 $(window).resize(function() {
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(function(){
	   var winW = $(window).width();
	   if (winW >= 1028) {
		   pcMenu();
		   $(".bg").hide();
	   } else if (winW < 1028){
		 //m_nav_click();
		 //nav_hover();
		 $("#m_mainMenu").css({"right":"-100%"});
		 $(".bg").hide();
		 $(".mainMenu ul > li, .headGnbSub").unbind();
	   }
   }, 100);
 });
 */
 // 퀵 메뉴
 function quickBtn() {
   $(".quick01").bind("mouseover focusin", function() {
     $(this).attr("src", "./static/images/common/quick_btn_on01.png");
   });
   $(".quick01").bind("mouseout focusout", function() {
     $(this).attr("src", "./static/images/common/quick_btn01.png");
   });
   $(".quick02").bind("mouseover focusin", function() {
     $(this).attr("src", "./static/images/common/quick_btn_on02.png");
   });
   $(".quick02").bind("mouseout focusout", function() {
     $(this).attr("src", "./static/images/common/quick_btn02.png");
   });
   $(".quick03").bind("mouseover focusin", function() {
     $(this).attr("src", "./static/images/common/quick_btn_on03.png");
   });
   $(".quick03").bind("mouseout focusout", function() {
     $(this).attr("src", "./static/images/common/quick_btn03.png");
   });
   $(".quick04").bind("mouseover focusin", function() {
     $(this).attr("src", "./static/images/common/quick_btn_on04.png");
   });
   $(".quick04").bind("mouseout focusout", function() {
     $(this).attr("src", "./static/images/common/quick_btn04.png");
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
   $("#m_mainMenu ul li .m_nav_btn").click(function() {
     $(".subMenu").slideUp("fast", function() {});
     $(".deph").slideUp("fast", function() {});
     var sub_menu = $(".subMenu");
     if ($(this).siblings('.subMenu').is(":visible")) {
       $(this).siblings(".subMenu").slideUp("fast", function() {});
     } else {
       $(this).siblings(".subMenu").slideDown("fast", function() {});
     }
   });
   $(".m_menu_btn").click(function() {
     var m_mainMenu = $("#m_mainMenu");
     var menu_size = m_mainMenu.width();
     $(".bg").hide();
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
     }
     $(".closeBtn").click(function(){
       m_mainMenu.stop().animate({
         "right": -menu_size
       }, 300);
       $(".bg").hide();
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

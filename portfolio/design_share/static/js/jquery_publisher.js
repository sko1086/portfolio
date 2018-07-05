 $(document).ready(function() {
   nav_hover();
   login_popup();
   login_step();
   headR_signUp();
   myInformation();
   search_focus();
   m_win_size_nav();
   m_know();
   m_mainMenu();
   m_home_btn();
   m_search();
   browserA();
   signUp_select();
 });
 // 창 사이즈 변경 시 기능 적용
 $(window).resize(function() {
   var winW = $(window).width();
   if (winW >= 1028) {
     $(".searchBox").show();
   } else if (winW < 1028){
     $(".searchBox").hide();
     m_nav_click();
     nav_hover();
   }
   if( $(".m_mainMenu").css("left") == "0px" ) {
     $(".m_mainMenu").css({"left":"-250px"});
     $(".bg").hide();
   }
   if( $(".m_know").css("right") == "0px" ) {
     $(".m_know").css({"right":"-250px"});
     $(".bg").hide();
   }
 });
 // 로그인 팝업창
 function login_popup() {
   $(".loginBox a").click(function() {
     $(".loginWrap").show();
     $(".bg").show();
     $(".bg, .loginInner .title .fa-times").click(function() {
       $(".bg").hide();
       $(".loginWrap").hide();
       $(".loginInner").hide();
       $(".step1").show();
       $(".loginInner input").val("");
       bg();
     });
     bg();
   });
 }
 // 로그인 팝업창 뒤로가기 버튼 클릭기능
 function login_step() {
   $(".loginWrap .pw_find").click(function() {
     $(".loginWrap .step1").hide();
     $(".loginWrap .step2").show();
   });
   $(".loginWrap .set a").click(function() {
     $(".loginWrap .step2").hide();
     $(".loginWrap .step3").show();
   });
   $(".loginWrap .close a").click(function() {
     $(".bg").hide();
     $(".loginWrap").hide();
     $(".loginWrap .step3").hide();
     $(".loginWrap .step1").show();
   });
   $(".loginWrap .step2 .fa-chevron-left").click(function() {
     $(".loginWrap .step2").hide();
     $(".loginWrap .step3").hide();
     $(".loginWrap .step1").show();
   });
   $(".loginWrap .step3 .fa-chevron-left").click(function() {
     $(".loginWrap .step1").hide();
     $(".loginWrap .step3").hide();
     $(".loginWrap .step2").show();
   });
 }
 // pc 디자이너 회원가입 팝업 창
 function signUp_form() {
   $(".signForm .loginInner").hide();
   $(".signForm .signStep2").show();
   $(".bg").show();
   $(".bg, .signForm .title .fa-times").click(function() {
     $(".bg").hide();
     $(".signForm .loginInner").hide();
     $(".loginInner input").val("");
     bg();
   });
   $(".signStep2 .fa-chevron-left").click(function() {
     $(".signForm .loginInner").hide();
     $(".signForm .signStep1").show();
   });
 }
 // pc 기업 회원가입 팝업 창
 function company_signUp_form() {
   $(".signForm .loginInner").hide();
   $(".signForm .signStep3").show();
   $(".bg").show();
   $(".bg, .signForm .title .fa-times").click(function() {
     $(".bg").hide();
     $(".signForm .loginInner").hide();
     $(".loginInner input").val("");
     bg();
   });
   $(".signStep3 .fa-chevron-left").click(function() {
     $(".signForm .loginInner").hide();
     $(".signForm .signStep1").show();
   });
 }
 // pc 회원가입 클릭 시 팝업창 보이기
 function headR_signUp() {
   $(".headR .signUp a").click(function() {
     $(".signForm .signStep1").show();
     $(".bg").show();
     $(".bg, .signForm .title .fa-times").click(function() {
       $(".bg").hide();
       $(".signForm .loginInner").hide();
       $(".loginInner input").val("");
       bg();
     });
     bg();
   });
 }
 // 로그인 시 header 오른쪽에 이름 클릭시 메뉴 보이기
 function myInformation() {
   $(".pcBell").click(function() {
     $(".myInformation .myInfoList").hide();
     if ($(".pcBell .bellBox").is(":visible")) {
       $(".pcBell .bellBox").slideUp("fast");
     } else {
       $(".pcBell .bellBox").slideDown("fast");
     }
   });
   $(".myInfoBtn").click(function() {
     $(".pcBell .bellBox").hide();
     if ($(".myInformation .myInfoList").is(":visible")) {
       $(".myInformation .myInfoList").slideUp("fast");
     } else {
       $(".myInformation .myInfoList").slideDown("fast");
     }
   });
 }
 // 검색창에서 focus 됐을 경우 안에 내용 삭제
 function search_focus() {
   $("#search").focusin(function() {
     $("#search").attr("value", "");
   });
 }
 // pc 메뉴 hover 시 하위 메뉴 보이기
 function nav_hover() {
   $(".mainMenu ul > li").bind("mouseover focusin", function() {
     $(this).children(".subMenu").stop().fadeIn(200);
     $(this).children("a").addClass("on");
   });
   $(".mainMenu ul > li").bind("mouseout focusout", function() {
     $(this).children(".subMenu").stop().fadeOut(200);
     $(this).children("a").removeClass("on");
   });
 }
 // 메뉴 클릭 시 하위 메뉴 보이기
 function m_nav_click() {
   $(".mainMenu ul > li").click(function() {
     $(this).children(".subMenu").stop().slideDown();
   });
 }
 // 창 사이즈 변경 시 기능 적용
 function m_win_size_nav() {
   var winW = $(window).width();
   if (winW < 1200) {
     m_nav_click();
     $(".searchBox").hide();
   } else if (winW > 1200) {
     $(".searchBox").show();
   }
 }
 // 모바일 왼쪽 메뉴아이콘 클릭시 메뉴 보이기
 function m_mainMenu() {
   var m_mainMenu = $(".m_mainMenu");
   var menu_size = m_mainMenu.width();
   $(".m_mainMenu ul li .m_nav_btn").click(function() {
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
     $(".bg").hide();
     if (m_mainMenu.css('left') == '0px') {
       $(".bg").hide();
       m_mainMenu.stop().animate({
         "left": -menu_size
       }, 300);
     } else {
       $(".bg").show();
       m_mainMenu.stop().animate({
         "left": 0
       }, 300);
       $(".bg").click(function() {
         $(this).hide();
         m_mainMenu.stop().animate({
           "left": -menu_size
         }, 300);
       });
     }
     if ($(".searchBox").is(":visible")) {
       $(".searchBox").fadeOut();
     } else {}
     if ($(".m_know").is(":visible")) {
       $(".m_know").animate({
         "right": "-250px"
       });
     } else {}
   });
 }
 // 모바일 종모양 클릭 시 알림내역 보이기
 function m_know() {
   $(".m_bell").click(function() {
     var bell = $(".m_know");
     var bell_size = bell.width();
     if (bell.css('right') == '0px') {
       $(".bg").hide();
       bell.stop().animate({
         "right": -bell_size
       }, 300);
     } else {
       $(".bg").show();
       bell.stop().animate({
         "right": 0
       }, 300);
       $(".bg").click(function() {
         $(this).hide();
         bell.stop().animate({
           "right": -bell_size
         }, 300);
       });
     }
     if ($(".searchBox").is(":visible")) {
       $(".searchBox").fadeOut();
     } else {}
     if ($(".m_mainMenu").is(":visible")) {
       $(".m_mainMenu").animate({
         "left": "-250px"
       });
     } else {}
   });
 }
 // 모바일 검색아이콘 클릭 시 검색창 보이기
 function m_search() {
   $(".m_search").click(function() {
     $(".bg").hide();
     var searchBox = $(".searchBox");
     if ($(".m_mainMenu").is(":visible")) {
       $(".m_mainMenu").animate({
         "left": "-250px"
       });
     }
     if (searchBox.is(":visible")) {
       searchBox.fadeOut();
       $(".bg").hide();
     } else {
       searchBox.fadeIn();
       $(".bg").show();
     }
     if ($(".m_know").is(":visible")) {
       $(".m_know").animate({
         "right": "-250px"
       });
     }
     $(".bg").click(function() {
       $(".bg").hide();
       $(".searchBox").hide();
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
 // 회원가입 기업분류 1차 카테고리 선택시 2차 카테고리 변경
 function signUp_select() {
   var option = "";
   $("#deph1").change(function() {
     var value = $(this).val();
     switch (value) {
       case '0':
         option = "<option>2차 분류 선택</option>";
         $("#deph2").html(option);
         break;
       case '1':
         option = "<option>교육 / 연구 및 개발</option>" +
           "<option>학원 / 학습지</option>" +
           "<option>교육기관</option>";
         $("#deph2").html(option);
         break;
       case '2':
         option = "<option>방송 / 광고 / 영상 / 오디오</option>" +
           "<option>문화 / 스포츠 / 엔터테인먼트</option>" +
           "<option>언론 / 출판 / 신문 / 잡지</option>";
         $("#deph2").html(option);
         break;
       case '3':
         option = "<option>자동차 판매 / 차량 연료</option>" +
           "<option>도매 / 상품 중개</option>" +
           "<option>소매</option>";
         $("#deph2").html(option);
         break;
       case '4':
         option = "<option>보험 / 연금</option>" +
           "<option>은행 / 카드 / 투자기관</option>" +
           "<option>증권 / 투신 / 선물</option>" +
           "<option>금융상품중개업/option>";
         $("#deph2").html(option);
         break;
       case '5':
         option = "<option>소프트웨어 / 솔루션 / ASP</option>" +
           "<option>인터넷 / 포털 / 컨텐츠 / 게임</option>" +
           "<option>쇼핑몰 / 전자상거래 / 오픈마켓</option>" +
           "<option>웹에이전시 / IT컨설팅</option>" +
           "<option>디자인 / CAD</option>";
         $("#deph2").html(option);
         break;
       case '6':
         option = "<option>의약 / 보건 / 사회복지</option>" +
           "<option>정부 / 비영리단체</option>" +
           "<option>전기 / 가스 / 수도 / 에너지</option>" +
           "<option>국제 및 외국 기관</option>";
         $("#deph2").html(option);
         break;
       case '7':
         option = "<option>전기 / 전자 제어</option>" +
           "<option>석유 / 화학 / 에너지</option>" +
           "<option>식품가공 / 개발</option>" +
           "<option>섬유 / 의류 / 패션</option>" +
           "<option>농업 / 어업 / 광업 / 임업</option>" +
           "<option>기계 / 설비 / 자동차</option>" +
           "<option>가구 / 목재/ 제지</option>" +
           "<option>조선 / 항공 / 우주</option>" +
           "<option>화장품 / 뷰티</option>" +
           "<option>금속 / 재료 / 철강 / 요업</option>" +
           "<option>생활용품 / 소비재/ 사무</option>" +
           "<option>반도체 / 광학 디스플레이</option>" +
           "<option>환경</option>" +
           "<option>기타 제조업</option>";
         $("#deph2").html(option);
         break;
       case '8':
         option = "<option>판매 유통</option>" +
           "<option>유통 / 무역 / 상사</option>" +
           "<option>운송 / 운수 / 물류</option>" +
           "<option>기타 판매유통</option>";
         $("#deph2").html(option);
         break;
       case '9':
         option = "<option>건설 / 건축 / 토목 / 시공</option>" +
           "<option>실내 / 인테리어 / 조경</option>" +
           "<option>환경설비</option>" +
           "<option>부동산 / 임대 / 중개</option>" +
           "<option>기타 건설업</option>";
         $("#deph2").html(option);
         break;
     }
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

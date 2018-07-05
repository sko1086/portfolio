$(document).ready(function(){
	namePopup();
	interestPopup();
	snsPopup();
	urlPopup();
	rePwPopup();
	groupPopup();
	group_tab();
	secessionPopup();
	gallery_popup();
});
// 이름변경 팝업
function namePopup() {
	$(".pInfo .name").click(function(){
		$(".namePopup .loginInner").show();
		$(".bg").show();
		$(".bg, .namePopup .fa-times").click(function(){
			$(".bg, .namePopup .loginInner").hide();
			bg();
		});
		bg();
	});
}
// 관심분야 변경 팝업
function interestPopup() {
	$(".pInfo .like").click(function(){
		$(".interestPopup .loginInner").show();
		$(".bg").show();
		$(".bg, .interestPopup .fa-times").click(function(){
			$(".bg, .interestPopup .loginInner").hide();
			bg();
		});
		bg();
	});
}
// sns 변경 팝업
function snsPopup() {
	$(".pInfo .sns").click(function(){
		$(".snsPopup .loginInner").show();
		$(".bg").show();
		$(".bg, .snsPopup .fa-times").click(function(){
			$(".bg, .snsPopup .loginInner").hide();
			bg();
		});
		bg();
	});
}
// url 변경 팝업
function urlPopup() {
	$(".info .myUrl").click(function(){
		$(".urlPopup .loginInner").show();
		$(".bg").show();
		$(".bg, .urlPopup .fa-times").click(function(){
			$(".bg, .urlPopup .loginInner").hide();
			bg();
		});
		bg();
	});
}
// 비밀번호 변경 팝업
function rePwPopup() {
	$(".pf .pwRe").click(function(){
		$(".rePwPopup .loginInner").show();
		$(".bg").show();
		$(".bg, .rePwPopup .fa-times").click(function(){
			$(".bg, .rePwPopup .loginInner").hide();
			bg();
		});
		bg();
	});
}
// 소속 변경 팝업
function groupPopup() {
	$(".pfCon .group").click(function(){
		$(".groupPopup .loginInner").show();
		$(".bg").show();
		$(".bg, .groupPopup .xBtn").click(function(){
			$(".bg, .groupPopup .loginInner").hide();
			bg();
		});
		bg();
	});
	$(".groupPopup .map a").click(function(){
		$(".acMap").show();
	});
	$(".acMap .fa-times").click(function(){
		$(".acMap").hide();
	});
}
// 회원탈퇴 팝업
function secessionPopup() {
	$(".botBtn .sec").click(function(){
		$(".secessionPopup .first").show();
		$(".bg").show();
		$(".bg, .secessionPopup .xBtn").click(function(){
			$(".bg, .secessionPopup .loginInner").hide();
			bg();
		});
		bg();
	});
	$(".secessionPopup .step1").click(function(){
		$(".secessionPopup .first").hide();
		$(".secessionPopup .second").show();
		$(".bg").show();
		bg();
	});
	$(".secessionPopup .step2").click(function(){
		$(".bg, .secessionPopup .loginInner").hide();
		bg();
	});
}
// 소속팝업 학교 / 학원 탭 기능
function group_tab() {
	$(".groupPopup .tab a").click(function(){
		var num = $(this).index()+1;
		$(".groupPopup .tabBox01, .groupPopup .tabBox02").removeClass("tabOn");
		$(".groupPopup .grBtn01, .groupPopup .grBtn02").removeClass("btnOn");
		$(".groupPopup .tabBox0"+num+"").addClass("tabOn");
		$(".groupPopup .grBtn0"+num+"").addClass("btnOn");
	});
}
// 포트폴리오 팝업
function gallery_popup() {
	$(".designList .imgBox").click(function(){
		$(".galleryBox").show();
		$(".bg").show();
		$(".bg, .galleryBox .close").click(function(){
			$(".galleryBox").hide();
			$(".bg").hide();
		});
	});
}
// 배경색
function bg() {
  if($(".bg").is(":visible")){
  $('html').css({"overflow-y":"hidden","overflow-x":"hidden" });
  } else {
	$('html').css({"overflow-y":"auto", "overflow-x":"auto"});
  }
  $(".bxslider li").css({"width":"100%"});
}

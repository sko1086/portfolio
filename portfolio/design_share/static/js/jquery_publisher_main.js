 $(document).ready(function(){
  // 메인 슬라이드
  var slider01 = $('.bxslider').bxSlider({
  	mode:'fade',
  	auto:true,
    speed:400,
  	pause:5000,
  	controls:false,
    onSlideAfter: function() {
			$(".bx-prev, .bx-next, .bx-pager-item").mouseover(function(){
				slider01.stopAuto();
			});
			$(".bx-prev, .bx-next, .bx-pager-item").mouseleave(function(){
				slider01.startAuto();
			});
		}
  });
  // 디자인 홍보 리스트 슬라이드
  var slider02 = $('.newsSlider').bxSlider({
  	auto:true,
    speed:400,
  	pause:5000,
  	controls:true,
  });
  design_list();
});
function design_list() {
	$(".designList li").click(function(){
  	var num = $(this).index();
  	$(".galleryBox").show();
  	$(".bg").show();
  	$(".bg").click(function(){
  	  $(this).hide();
  	  $(".galleryBox").hide();
  	});
  	$(".reqBox .closeBtn").click(function(){
  	  $(".reqForm").hide();
  	});
  	$(".stBox3 .reqBtn").click(function(){
  	  $(".reqForm").fadeIn();
  	});
  });
}

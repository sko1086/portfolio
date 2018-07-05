$(document).ready(function(){

	$(".screen a.video1").click( function(){ // youtube open
		$(".modal").show();
		$(".overlay").show();
		var num = $(this).attr("id");
		var src = "<iframe width='640' height='360' src='https://www.youtube.com/embed/"+num+"'frameborder='0'></iframe>";
		$(".modal").append(src); /* modal에 iframe 추가 */
		v_size();		
	});
	$(".screen a:not(.video1)").click( function(){ // image open
		$(".modal_img").show();
		$(".overlay").show();
		var index =$(this).children("img").attr("src").substring(12, 14);
		var image="<img src='images/modal_"+index+".jpg'/>";
		$(".modal_img").append(image);
		img_size();
	});
	$(".modal_img button").bind("click focus", function(){ // youtube close
		$(".overlay").hide();
		$(".modal_img").hide();
		$(".modal_img img").remove();
	});
	$(".modal button").bind("click focus", function(){ // image close
		$(".overlay").hide();
		$(".modal").hide();
		$(".modal iframe").remove();
	});
	
	// gallery 슬라이딩
	
	$(".galleryWrap").prepend($(".screen .gallery:last"));
	width = $(".gallery").width();
	$(".galleryWrap").css({"marginLeft":"-"+width+"px"});
	
	$(".slide_right").click( function(){ film("next", "fast"); }); // 다음버튼
	
	$(".slide_left").click( function(){ film("prev", "fast"); }); // 이전버튼
	
	// screen box resize
	
	$(window).resize(function(){
		width = $(".screen_box").width();
		$(".galleryWrap").css({"marginLeft":"-"+width+"px"});
		v_size();
		img_size();
	});

	$(".art_head button").click(function(){
		var ifa_top = $(".ifa").offset().top;
		$('html, body').animate({"scrollTop":+ifa_top+"px"},100);
	});
	$(".ifa_head button").click(function(){
		var art_top = $(".article").offset().top;
		$('html, body').animate({"scrollTop":+art_top+"px"},100);
	});
		
});

function v_size(){ // youtube box 위치조정
	var OWidth = $(".screen").width()/2;
	var OHeight = $(".screen").height()/2;
	var MHeight = $(".modal").height()/2;
	var Iwidth = $(".modal iframe").width()/2;
	var modal_w = OWidth - Iwidth;
	var modal_h = OHeight - MHeight;
	$(".modal").css({"top":+modal_h+"px","left":+modal_w+"px"})

}
function img_size(){ // image box 위치조정
	var OWidth = $(".screen").width()/2;
	var OHeight = $(".screen").height()/2;
	var IWidth = $(".modal_img").width()/2
	var MHeight = $(".modal_img").height()/2;
	var modal_w = OWidth - IWidth;
	var modal_h = OHeight - MHeight;
	$(".modal_img").css({"top":+modal_h+"px","left":+modal_w+"px"});
}

function film(target, speed){ // slide 
	if( target == "next"){
		$(".galleryWrap").animate({"marginLeft":"-="+width+"px"},speed, function(){
			$(".galleryWrap").css({"marginLeft":"-"+width+"px"});
			$(".gallery:first").appendTo(".galleryWrap");
		});
	}
	if( target == "prev" ){
		$(".galleryWrap").animate({"marginLeft":"+="+width+"px"},speed, function(){
			$(".galleryWrap").css({"marginLeft":"-"+width+"px"});
			$(".gallery:last").prependTo(".galleryWrap");
		});	
	}
}
function Height_size(){ // text size 조정
	var text_box = $(".office .inner li.height_s").outerHeight();
	var text_box2 = $(".shopping .inner li.last").outerHeight();
	$(".office .inner li:not(.height_s)").height(text_box);
	$(".shopping .inner li:not(.last)").height(text_box2);
}
$(window).load(function(){
	Height_size();
});
$(window).resize(function(){
	Height_size();
});

$(document).ready(function(){
	width = $(".main_slide li").width();
	
	$(".slide_btn li").click(function(){
		var index = $(this).index();
		var open = $(".slide_btn li.blue").index();
		
		if( index > open ){
			$(".main_slide li:eq("+index+")").css({"left":"100%"});
			$(".main_slide li:eq("+index+")").stop().animate({"left":"0px"}, 500);
			$(".main_slide li:eq("+open+")").stop().animate({"left":"-100%"}, 500);	
		}
		else if ( index < open ){
			$(".main_slide li:eq("+index+")").css({"left":"-100%"});
			$(".main_slide li:eq("+index+")").stop().animate({"left":"0px"}, 500);
			$(".main_slide li:eq("+open+")").stop().animate({"left":"100%"}, 500);
		}

		$(".slide_btn li").removeClass();
		$(".slide_btn li:eq("+index+")").addClass("blue");
	});
	var z=0;
	var autoClick = setInterval(function(){ 
		$(".slide_btn li:eq("+z+")").click();
		z++
		if(z==3){ z=0;}
	}, 2000 );
	$(".slide_btn li").mouseover(function(){ clearInterval(autoClick); });
	
	$(".banner_btn ul li").click(function(){
		var btn = $(this).index();
		$(".banner .slide li").hide();
		$(".banner .slide li:eq("+btn+")").fadeIn();

		$(".banner_btn ul li button").removeClass();
		$(this).children('button').addClass('choice');

	});
	$(".acodian dd").hide();
	$(".acodian .aco_item1 dd").show();

	$(".acodian dl dt").click(function(){
		$(".acodian dd").hide();
		$(this).nextAll("dd").show();
		$(".acodian dl dt").addClass("reset");
		$(this).removeClass();
		$(this).addClass("open");
	});
	$(".b_header .gnb li").hover(
		function(){
		$(this).children("a").css({"color":"#0259a9"});
		//$(".gnb .gnb_bot").show();
		$(this).children(".gnb_bot").show();
		
	}, function(){
		$(this).children("a").css({"color":"#333"});
		$(this).children(".gnb .gnb_bot").hide();
			
	});
	$(".gnb .gnb_bot li").hover(function(){
		$(".gnb .gnb_bot li").removeClass();
		$(this).addClass("select");
		
	});
});

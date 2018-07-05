$(document).ready(function(){
	width = $(".main_slide li").width();

	$(".slide_btn li").click(function(){ // button slide
		
		var index = $(this).index();
		$(".slide_btn li").removeClass();
		$(".slide_btn li:eq("+index+")").addClass("blue");

		for(var i=0; i<width; i++){
			if(index==i){
				$(".main_slide").animate({"marginLeft":"-"+Math.ceil(width*index)+"px"}, 500); }
		}
	});
	var z = 1;
	var autoClick = setInterval(function(){  // auto click
		$(".slide_btn li:eq("+z+")").click();
		z++
		if(z==3){ z=0;}
	}, 5000 );

	$(".banner_btn ul li").click(function(){ // img fadein
		var btn = $(this).index();
		$(".banner .slide li").hide();
		$(".banner .slide li:eq("+btn+")").fadeIn();

		$(".banner_btn ul li button").removeClass();
		$(this).children('button').addClass('choice');

	});
	$(".acodian dd").hide();
	$(".acodian .aco_item1 dd").show();

	$(".acodian dl dt").click(function(){ // text acodian
		var aco = $(this).index();
		console.log(aco);
		$(".acodian dd").hide();
		$(this).nextAll("dd").show();
		$(".acodian dl dt").css({"fontWeight":"normal"});
		$(".acodian dl dt").css({"borderBottom":"none"});
		$(".acodian dl dt").css({"backgroundImage":"none"});
		$(".acodian dl dt").css({"backgroundImage":"url('images/a_bot.png')"});
		$(this).css({"backgroundImage":"url('images/a_top.png')"});
		$(this).css({"fontWeight":"bold"});
		$(this).css({"borderBottom":"1px solid #d8dfe5"});
	});
});

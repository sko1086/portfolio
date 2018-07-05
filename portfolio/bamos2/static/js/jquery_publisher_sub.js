$(document).ready(function(){
  //side_menu_height();
  topBtn();
  //layout();
});
$(window).resize(function(){
  side_menu_height();
});
function side_menu_height() {
  var conH = $(".content").height()+5;
  $(".sideMenu").height(conH);
}
function topBtn(){
  $(".topBtn").click(function(){
    $("html, body").stop().animate({"scrollTop":0});
  });
}
function layout(){
	$(".headerWrap").load("./header.html");
	$(".footer").load("./footer.html");
}

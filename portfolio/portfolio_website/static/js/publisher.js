$(document).ready(function(){
  main_visual();
  /*portfolio();*/
});
function main_visual() {
  var i = 2;
  setInterval(function(){
    $("#main_wrap").removeClass();
    $("#main_wrap").addClass("main_slide_"+i+"");
    i++;
    if ( i == 3 ) {  i = 1; }
  }, 5000);
}
function portfolio() {
  var i = 0;
  var portfolio_list = setInterval(function(){
    $(".pr_list li").eq(i).fadeIn();
    i++;
    if ( i == 11 ) { clearInterval(portfolio_list); }
  }, 500);
}

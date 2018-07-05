$(document).ready(function(){
   bxslide();
   section1_tab();
});
function bxslide() {
  $('.bxslider').bxSlider({
    mode:'fade',
    auto:false,
    speed:1000,
    pager:false,
    maxSlides:2,
    autoHover:false,
    controls:true
  });
  $('.slider4').bxSlider({
    slideWidth: 165,
    minSlides: 2,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 20,
    auto:true,
    controls:false
  });
}
function section1_tab() {
  $(".sectionWrap1 .tab li a").focus(function(){
    var num = $(this).index();
    $(".sectionWrap1 .tab li a").removeClass("on");
    $(this).addClass("on");
    $(".sectionWrap1 .tabInner").hide();
    $(".sectionWrap1 .tabInner").eq(num).fadeIn();
  });
}											
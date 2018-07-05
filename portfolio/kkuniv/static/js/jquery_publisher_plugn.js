
jQuery.fn.myPublisher = function (option) {
	$(this).bind("mouseover focusin", function() {
     $(".headGnbSub").stop().slideDown(300);
   });
   $(this).bind("mouseout focusout", function() {
     $(".headGnbSub").stop().slideUp(300);
   });
}

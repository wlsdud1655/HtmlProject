$(function(){
	var position1 = parseInt($("#scroll").css("top"));
	$(window).scroll(function(){
		var position2 = $(window).scrollTop();
		$("#scroll").stop().animate({
			"top" : position2+position1+"px"},300);
		
	});
});
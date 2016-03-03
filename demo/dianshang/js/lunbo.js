$(document).ready(function(){
	$(".slider_control li").hover(function(){
		$(".slider_control li").removeClass("cur");
		$(this).addClass("cur");
		var index =$(this).index(".slider_control li");
		$(".slider li").hide();
		$(".slider li").eq(index).fadeIn();
		$(".slider_bottom").hide();
		$(".slider li div").addClass("slider_bottom");
		$(".slider .slider_bottom").fadeIn(1000);
	},function(){

	});


	var i=1;
	function autoPlay(){
		$(".slider_control li").eq(i).trigger("mouseover");
		i++;
		if(i==5){
			i=0;
		}
	}
	setInterval(autoPlay,2000);
});
$(document).ready(function(){
		var content0=document.getElementById('content');
		var i=0;
		content0.onmousewheel=a;
		/*兼容火狐浏览器滚轮事件*/
		if(content0.addEventListener){
			content0.addEventListener("DOMMouseScroll",a,false);
		}
		/*滚轮翻页事件 兼容各浏览器*/
		function a(ev){
			if(!$("#content>div").is(':animated')){
				var ev=ev || event;
				var b=true;
				if(ev.wheelDelta){
				b=ev.wheelDelta>0?true:false;
				}else{
				b=ev.detail<0?true:false;
				}
				if(b){
				if(i==0)return;
				i--;
				}else{
				if(i==4)return;
				i++;
				}
				$("#content>div").animate({top:-(i*1500)},1000);
				$("#index li").removeClass("index_cur");
				$("#index li").eq(i).addClass("index_cur");
				$("#top li").removeClass("top_cur");
				$("#top li").eq(i).addClass("top_cur");
				$("#content div div").hide();
				con();
			}
		};


		/*点击跳转翻页*/
		$("#index li").click(function(){
			$("#index li").removeClass("index_cur");
			$("#top li").removeClass("top_cur");
			$(this).addClass("index_cur");
			i = $(this).index("#index li");
			$("#top li").eq(i).addClass("top_cur");
			$("#content>div").animate({top:-(i*1500)},1000);
			$("#content div div").hide();
			con();
		});
		$("#top li").click(function(){
			$("#top li").removeClass("top_cur");
			$("#index li").removeClass("index_cur");
			$(this).addClass("top_cur");
			i = $(this).index("#top li");
			$("#index li").eq(i).addClass("index_cur");
			$("#content>div").animate({top:-(i*1500)},1000);
			$("#content div div").hide();
			con();
		});



		function con(){
			if(i==0){
				$(".pic").fadeIn(3500);
			}
		}
		con();


		/*content_1部分*/
		$(".pic").hover(function(){
			$(".pic li").eq(0).fadeOut();
			$(this).css("border-color","#FF8040");
		},function(){
			$(".pic li").eq(0).fadeIn();
			$(this).css("border-color","#FFFFFF");
		})
	});
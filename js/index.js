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
				$(".name h1").hide();
				$(".introduce h2").hide();
				$(".introduce_line").hide();
				$("canvas").hide();
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
			/*$("#content div div").hide();
			$(".name h1").hide();
			$(".introduce h2").hide();
			$(".introduce_line").hide();
			$("canvas").hide();*/
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
			$(".name h1").hide();
			$(".introduce h2").hide();
			$(".introduce_line").hide();
			$("canvas").hide();
			con();
		});



		function con(){
			if(i==0){
				$(".pic").fadeIn(2000);
					$(".introduce").fadeIn(1000,function(){
						$(".introduce_line").fadeIn().animate({width:'800px'},1000,function(){
						$(".introduce h2").slideDown(1000);
						});
					});
					$(".name").fadeIn(1000);
					$(".name h1").fadeIn(4000);		
			}
			if(i==1){
				$(".content_2 div").show(function(){
					$("canvas").slideDown(2000);
				});
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


		/*content_4部分*/
		$(".demo li").hover(function(){
			var p =	$(this).index(".demo li");
			$(".demo_1").show();
			$(".demo_1").css("top","5.3%");
			$(".demo_1 li").eq(p).css("visibility","visible");	
		},function(){

		});

        $(".demo_1 li").hover(function(){
			var p =	$(this).index(".demo_1 li");
			$(".demo_1").show();
			$(".demo_1").css("top","5.3%");
			$(".demo_1 li").eq(p).css("visibility","visible");	
		},function(){
            var p =	$(this).index(".demo_1 li");
			$(".demo_1").hide();
			$(".demo_1").css("top","20%");
			$(".demo_1 li").eq(p).css("visibility","hidden");
		});

        });
		
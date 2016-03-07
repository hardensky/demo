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
				$("#content div div,.name h1,.introduce h2,.introduce_line,canvas,.demo,.demo li,.skill h2,.skill_1,.skill_1 li,.skill_1 h2,.circle,.contact li").hide();
				$(".contact li:nth-child(1)").css("margin-left","0px");
				$(".contact li:nth-child(2)").css("margin-left","1200px");
				$(".contact li:nth-child(3)").css("margin-left","0px");
				$(".contact li:nth-child(4)").css("margin-left","980px");
				$(".contact li:nth-child(5)").css("margin-left","0px");
				$(".contact li:nth-child(6)").css("margin-left","1350px");
				$(".contact li:nth-child(7)").css("margin-left","0px");
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
			$("#content div div,.name h1,.introduce h2,.introduce_line,canvas,.demo,.demo li,.skill h2,.skill_1,.skill_1 li,.skill_1 h2,.circle,.contact li").hide();
			$(".contact li:nth-child(1)").css("margin-left","0px");
			$(".contact li:nth-child(2)").css("margin-left","1200px");
			$(".contact li:nth-child(3)").css("margin-left","0px");
			$(".contact li:nth-child(4)").css("margin-left","980px");
			$(".contact li:nth-child(5)").css("margin-left","0px");
			$(".contact li:nth-child(6)").css("margin-left","1350px");
			$(".contact li:nth-child(7)").css("margin-left","0px");
			con();
		});
		$("#top li").click(function(){
			$("#top li").removeClass("top_cur");
			$("#index li").removeClass("index_cur");
			$(this).addClass("top_cur");
			i = $(this).index("#top li");
			$("#index li").eq(i).addClass("index_cur");
			$("#content>div").animate({top:-(i*1500)},1000);
			$("#content div div,.name h1,.introduce h2,.introduce_line,canvas,.demo,.demo li,.skill h2,.skill_1,.skill_1 li,.skill_1 h2,.circle,.contact li").hide();
			$(".contact li:nth-child(1)").css("margin-left","0px");
			$(".contact li:nth-child(2)").css("margin-left","1200px");
			$(".contact li:nth-child(3)").css("margin-left","0px");
			$(".contact li:nth-child(4)").css("margin-left","980px");
			$(".contact li:nth-child(5)").css("margin-left","0px");
			$(".contact li:nth-child(6)").css("margin-left","1350px");
			$(".contact li:nth-child(7)").css("margin-left","0px");
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
			if(i==2){
				$(".skill").show(function(){
					$(".skill h2").slideDown(2000);
				});
				$(".skill_1").show(function(){
					$(".skill_1 li").slideDown(1000,function(){
						$(".circle").show(function(){	
							var myCircle = Circles.create({
  							id:                  'circles-1',
  							radius:              60,
  							value:               75,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#EFE3AD', '#EFC300'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-2',
  							radius:              60,
  							value:               75,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#A4F8F8', '#3DA1FF'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-3',
  							radius:              60,
  							value:               70,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#D2FED2', '#00FF00'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-4',
  							radius:              60,
  							value:               70,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#FCAAAA', '#F90505'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-5',
  							radius:              60,
  							value:               65,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#EFE3AD', '#EFC300'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-6',
  							radius:              60,
  							value:               60,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#A4F8F8', '#3DA1FF'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-7',
  							radius:              60,
  							value:               60,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#D2FED2', '#00FF00'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						var myCircle = Circles.create({
  							id:                  'circles-8',
  							radius:              60,
  							value:               75,
  							maxValue:            100,
  							width:               10,
  							text:                function(value){return value + '%';},
  							colors:              ['#FCAAAA', '#F90505'],
  							duration:            100,
  							wrpClass:            'circles-wrp',
  							textClass:           'circles-text',
  							valueStrokeClass:    'circles-valueStroke',
  							maxValueStrokeClass: 'circles-maxValueStroke',
  							styleWrapper:        true,
  							styleText:           true
						});
						});
						$(".skill_1 h2").show(500);
					});
				});
			}
			if(i==3){
				$(".demo").show(function(){
					$(".demo li").eq(0).slideDown(500);
					$(".demo li").eq(1).slideDown(1000);
					$(".demo li").eq(2).slideDown(1500);
					$(".demo li").eq(3).slideDown(2000);
				});
			}
			if(i==4){
				$(".contact").fadeIn(1000,function(){
					$(".contact li").fadeIn(1000,function(){
						$(".end").slideDown(2000);
					});
					$(".contact li:nth-child(1)").animate({"margin-left":"450px"},1000);
					$(".contact li:nth-child(2)").animate({"margin-left":"600px"},1000);
					$(".contact li:nth-child(3)").animate({"margin-left":"520px"},1000);
					$(".contact li:nth-child(4)").animate({"margin-left":"480px"},1000);
					$(".contact li:nth-child(5)").animate({"margin-left":"640px"},1000);
					$(".contact li:nth-child(6)").animate({"margin-left":"660px"},1000);
					$(".contact li:nth-child(7)").animate({"margin-left":"610px"},1000);
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
		
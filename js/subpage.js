				//导航栏
			$('.ulli ul li').eq(0).click(function(){
				location.href = 'hpagey.html'
			})
			$('.ulli ul li').eq(1).click(function(){
				location.href = 'rimeny.html'
			})
			$('.ulli ul li').eq(2).click(function(){
				location.href = 'lvyoutaoy.html'
			})
			$('.zhuce span').eq(2).click(function(){
				location.href = 'hpagew.html';
			})
			//
			//
			var local = window.localStorage;
			$('.zhuce span').eq(0).html('欢迎您 '+local.username+' ');
//			console.log(location.search);
			//
			//ajax,关联子页内容
			var arr = ["eimendan.jpg","taocanbie.jpg"];
			var arr1 = ['埃菲尔铁塔','卢浮宫'];
			var arr2 = ['the Eiffel Tower','Musée du Louvre']
			var ids = location.search.split("=")[1];
//			console.log(location.search);
			var idzao = ids.split(0)[1]-1;
			
			var imglijin = location.hash.split("#")[1];
			console.log(imglijin)
			
			$.ajax({
				type:"get",
				url:"file/new_file.json",
				async:true,
				dataType:'json',
				data:{
				},
				success:function(res){
					console.log(res)
					$('.wenben').html(res[ids]);
					$('.toubie').css({'background':'url(img/'+arr[idzao]+')','background-size':'100%','background-position-y':'-240px'});
					$('.zi span').html(arr1[idzao]);
					$('.zix span').html(arr2[idzao]);
					$('.zi1').html(arr1[idzao]);
					
					$('.tabxiehuan ul').html(res[imglijin]);
//					console.log($('.tabxiehuan ul').html());
					
				}
			});
			//
			//移动导航栏	
			$('.daoha').append($('.daohan').clone());
			$('.daoha .daohan').get(0).className = ' ';
			window.onscroll = function(){
				if($(window).scrollTop() > 300){
//					console.log(2)
					$('.daoha').css('background','#BFBFBF').stop().animate({'top':-20},300)
				}
				if($(window).scrollTop() < 300){
//					console.log(1)
					$('.daoha').stop().animate({'top':-100},200)
				}
			}
			$('.daoha .ulli ul li').eq(0).click(function(){
				location.href = 'hpagey.html'
			})
			$('.daoha .ulli ul li').eq(1).click(function(){
				location.href = 'rimeny.html'
			})
			$('.daoha .ulli ul li').eq(2).click(function(){
				location.href = 'lvyoutaoy.html'
			})
//			$('.zhuce span').eq(0).click(function(){
//				location.href = 'lend.html';
//			})
			$('.daoha .zhuce span').eq(2).click(function(){
				location.href = 'hpagew.html';
			})
			//
			//回顶部
			var timer = null;
			window.onmousewheel = function(){
				if($(window).scrollTop() < 700){
					$('.huidin').hide();
				}else if($(window).scrollTop() > 700){
					$('.huidin').show();
				}
			}
			$('.huidin').click(function(){
				 timer = setInterval(function(){
						window.scrollBy(0,-20);
	//					console.log(1)
						if ($(window).scrollTop() == 0) {
							$('.huidin').hide();
							clearInterval(timer);
						}
					},10)
			})
			//
			//tab切换
			var num = 0;
			var trim = null;
			var newli = $('.tabxiehuan ul li').eq(0).clone();
			newli.appendTo($('.tabxiehuan ul'));
			$('.tabxiehuan ul').width(2400);
//			console.log($('.tabxiehuan ul').html())
			var len = $('.tabxiehuan ul li').length;
			var flon = true;
			
			$('.zuobian').click(function(){
				num--;
				move();
			});
			$('.youbian').click(function(){
				num++;
				move();
			});
			function move(){
//				console.log(len)
				if(flon == true){
					
					newli = $('.tabxiehuan ul li').eq(0).clone();
					newli.appendTo($('.tabxiehuan ul'));
					$('.tabxiehuan ul').width(2400);
					len = $('.tabxiehuan ul li').length;
					flon = false;
				}
//				console.log($('.tabxiehuan ul').html())
				
				if(num < 0){
					num = len-2;
					$('.tabxiehuan ul').css('left',-(len-1)*480);
				}
				if(num > len-1){
					num = 1;
					$('.tabxiehuan ul').css('left',0);
				}
				if(num > $('.xiabiaodie div').length-1){
					$('.xiabiaodie div').eq(0).addClass('tabxiabian').siblings().removeClass('tabxiabian');
				}else{
					$('.xiabiaodie div').eq(num).addClass('tabxiabian').siblings().removeClass('tabxiabian');
				}
				
				
				$('.tabxiehuan ul').stop().animate({'left':-num*480},500)
			}
			trim = setInterval(function(){
				num++;
				move();
			},2000)
			
			$('.tabxiehuan').mouseover(function(){
				clearInterval(trim);
				$('.zuobian').show();
				$('.youbian').show();
				$('.fandajin').show();
				$('.fandajinxiao').show();
				var danqianimg = $('.tabxiehuan ul li').eq(num).html();
				$('.fandajin').html(danqianimg)
			})
			$('.tabxiehuan').mouseout(function(){
				$('.zuobian').hide();
				$('.youbian').hide();
				$('.fandajin').hide();
				$('.fandajinxiao').hide();
				trim = setInterval(function(){
					num++;
					move();
				},2000)
			})
//			console.log(num)
			//放大镜
			$('.tabxiehuan').mousemove(function(event){
				var ev = event ||window.event;
				var px =  ev.pageX ||ev.clientX+scrollX;
				var py = ev.pageY || ev.clientY+scrollY;
				var postionx = px-$('.tabxiehuan').offset().left-50;
				var postiony = py-$('.tabxiehuan').offset().top-50;
				if(postionx < 0){
					postionx = 0;
				}else if(postionx > $('.tabxiehuan').width()-$('.fandajinxiao').width()){
					postionx = $('.tabxiehuan').width()-$('.fandajinxiao').width();
				};
				if(postiony <0){
					postiony = 0;
				}else if(postiony > $('.tabxiehuan').height()-$('.fandajinxiao').height()){
					postiony = $('.tabxiehuan').height()-$('.fandajinxiao').height();
				};
				$('.fandajinxiao').css({'left':postionx,'top':postiony})
				
//				console.log($('.fandajin img').eq(0).width())
//				console.log($('.tabxiehuan ul li img').eq(0).width())
				var dazaomovx = postionx*(($('.fandajin img').eq(0).width()-$('.fandajin').width())/($('.tabxiehuan ul li img').eq(0).width()-$('.fandajinxiao').width()));
				var dazaomovy = postiony*(($('.fandajin img').eq(0).width()-$('.fandajin').width())/($('.tabxiehuan ul li img').eq(0).width()-$('.fandajinxiao').width()));
				$('.fandajin img').css({'left':-dazaomovx, 'top':-dazaomovy});
			})
			//
			//tab下
			var num1 = 0;
			$('#you').click(function(){
//				console.log(1)
				num1++;
				if(num1 > $('.tabxia ul li').length-5){
					num1 = 0;
				}
//				console.log(num1)
				$('.tabxia ul').stop().animate({'left':-170*num1},800)
			})
			$('#zuo').click(function(){
//				console.log(1)
				num1--;
				if(num1 < 0){
					num1 = $('.tabxia ul li').length-5;
				}
//				console.log(num1)
				$('.tabxia ul').stop().animate({'left':-170*num1},800)
			})
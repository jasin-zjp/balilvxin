               //无缝轮播
		var num = 0;
		var imgkb = $('.lunboul li').eq(0).clone();
		$('.lunboul').append(imgkb);
//		$('.lunboul').delay(1000).animate({'left':-num*1200},1500,move);
		setTimeout(move,1000);
		function move(){
			num++;
			if(num > 5){
				num = 1;
				$('.lunboul').css('left',0);
			}
//			console.log(num)
			
			$('.lunboul').delay(2500).animate({'left':-num*1200},1500,move);
			
		}
//		function tab(){
//			if(num > 4){
//				$('.xiabiao div').eq(0).addClass('yanshi').siblings().removeClass('yanshi');
//			}else{
//				$('.xiabiao div').eq(num).addClass('yanshi').siblings().removeClass('yanshi');
//			}
//		}
			
		
		
		//
		//按钮样式
		$('.jindianan').click(function(){
			$(this).css('color','#EC586A').css('background','white').css('border','1px solid #EC586A')
			$(this).siblings().css('color','#8e8e8e').css('background','#f7f7f7').css('border','1px solod #DBDBDB')
			
		})
		//
		//按钮事件
		$('.jindianan').eq(0).click(function(){
			$('.litab').hide().show(5).eq(3).hide();
			$('.litab').eq(4).hide();
			$('.litab').eq(5).hide();
			$('.litab').eq(6).hide();
		})
		$('.jindianan').eq(1).click(function(){
			$('.litab').eq(5).show().siblings().hide();
		})
		$('.jindianan').eq(2).click(function(){
			$('.litab').eq(0).show().siblings().hide();
		})
		$('.jindianan').eq(3).click(function(){
			$('.litab').eq(4).show().siblings().hide();
		})
		$('.jindianan').eq(4).click(function(){
			$('.litab').eq(3).show().siblings().hide();
		})
		$('.jindianan').eq(5).click(function(){
			$('.litab').eq(6).show().siblings().hide();
		})
		//
		//视频按钮
		$('.btn').click(function(){
			$('#guanbi').show()
			$('#shipin').append('<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=d0535o0ufus&tiny=0&auto=0" allowfullscreen></iframe>').show();
		})
		
		$('#guanbi').click(function(){
			$('#shipin').html(" ").hide();
			$('#guanbi').hide()
		})
		//
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
//		$('.zhuce span').eq(0).click(function(){
//			location.href = 'lend.html';
//		})
		$('.zhuce span').eq(2).click(function(){
			location.href = 'hpagew.html';
		})
		var local = window.localStorage;
		$('.zhuce span').eq(0).html('欢迎您 '+local.username+' ');
		//
		//移动导航栏
		$('.daoha').append($('.daohan').clone());
		$('.daoha .daohan').get(0).className = ' ';
		window.onscroll = function(){
			if($(window).scrollTop() > 500){
				console.log(2)
				$('.daoha').css('background','#BFBFBF').stop().animate({'top':-20},300)
			}
			if($(window).scrollTop() < 500){
				console.log(1)
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
//		$('.zhuce span').eq(0).click(function(){
//			location.href = 'lend.html';
//		})
		$('.daoha .zhuce span').eq(2).click(function(){
			location.href = 'hpagew.html';
		})
		//
		//景点点击事件
		$('.balidianji').click(function(){
//			console.log(1)
			location.href = 'Subpage.html?=101#103';
		})
		$('.luofugon').click(function(){
//			console.log(1)
			location.href = 'Subpage.html?=102#104';
		})
		//
		//回顶部
		var timer = null;
		window.onmousewheel = function(){
			if($(window).scrollTop() < 1500){
				$('.huidin').hide();
			}else if($(window).scrollTop() > 1500){
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
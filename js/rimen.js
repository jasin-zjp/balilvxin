					//	
		$('.jindianan').click(function(){
			$(this).css('color','#EC586A').css('background','white').css('border','1px solid #EC586A')
			$(this).siblings().css('color','#8e8e8e').css('background','#f7f7f7').css('border','1px solod #DBDBDB')
			
		})
		//
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
		//
		$('.ulli ul li').eq(0).click(function(){
			location.href = 'hpagew.html'
		})
		$('.ulli ul li').eq(1).click(function(){
			location.href = 'rimen.html'
		})
		$('.ulli ul li').eq(2).click(function(){
			location.href = 'lvyoutao.html'
		})
		$('.zhuce span').eq(0).click(function(){
			location.href = 'lend.html';
		})
		$('.zhuce span').eq(2).click(function(){
			location.href = 'register.html';
		})
		//
		//
		$('.daoha').append($('.daohan').clone());
		$('.daoha .daohan').get(0).className = ' ';
		window.onscroll = function(){
			if($(window).scrollTop() > 300){
				console.log(2)
				$('.daoha').css('background','#BFBFBF').stop().animate({'top':-20},300)
			}
			if($(window).scrollTop() < 300){
				console.log(1)
				$('.daoha').stop().animate({'top':-100},200)
			}
		}
		$('.daoha .ulli ul li').eq(0).click(function(){
			location.href = 'hpagew.html'
		})
		$('.daoha .ulli ul li').eq(1).click(function(){
			location.href = 'rimen.html'
		})
		$('.daoha .ulli ul li').eq(2).click(function(){
			location.href = 'lvyoutao.html'
		})
		$('.daoha .zhuce span').eq(0).click(function(){
			location.href = 'lend.html';
		})
		$('.daoha .zhuce span').eq(2).click(function(){
			location.href = 'register.html';
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
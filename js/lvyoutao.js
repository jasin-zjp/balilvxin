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
			location.href = 'shouyew.html'
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

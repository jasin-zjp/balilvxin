					//
			$('.ulli ul li').eq(0).click(function(){
				location.href = 'shouyey.html'
			})
			$('.ulli ul li').eq(1).click(function(){
				location.href = 'rimeny.html'
			})
			$('.ulli ul li').eq(2).click(function(){
				location.href = 'lvyoutaoy.html'
			})
//			$('.zhuce span').eq(0).click(function(){
//				location.href = 'lend.html';
//			})
//			$('.zhuce span').eq(2).click(function(){
//				location.href = 'register.html';
//			})
			$('.zhuce span').eq(2).click(function(){
				location.href = 'shouyew.html';
			});
			//
			//
			var local = window.localStorage;
			$('.zhuce span').eq(0).html('欢迎您 '+local.username+' ');

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
			location.href = 'shouyey.html'
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
			location.href = 'shouyew.html';
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
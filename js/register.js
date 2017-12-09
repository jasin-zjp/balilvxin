					
			var username = /^[\u4e00-\u9fa5\w]{3,16}/;//用户名
			var mall = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱
			var psaa = /^[a-z0-9_-]{6,18}$/;//密码
			var flan1 = null;
			var flan2 = null;
			var flan3 = null;
			var flan4 = null;
			var flan5 = null;
			var loca = window.localStorage;
			
			$('#name').blur(fn);
			function fn(){
//				console.log(1)
				if($('#name').val() == ""){
					$('#name1').html('此处必须填写 !');
					flan1 = false;
				}else if(!username.test($('#name').val())){
					$('#name1').html('用户名中含非法字符 !');
					flan1 = false;
				}else{
					$('#name1').html(' ');
					flan1 = true;
				}
			};
//			$('#emer').focus(fn);
			$('#emer').blur(fn1);
			function fn1(){
				if($('#emer').val() == ""){
					$('#emer1').html('此处必须填写  !');
					flan2 = false;
				}else if(!mall.test($('#emer').val())){
					$('#emer1').html('邮箱格式不合法 !');
					flan2 = false;
				}else{
					$('#emer1').html(' ');
					flan2 = true;
				}
			};
//			$('#pass').focus(fn).focus(fn1);
			$('#pass').blur(fn2);
			function fn2(){
				if($('#pass').val() == ''){
					$('#pass1').html('此处必须填写  !');
					flan3 = false;
				}else if(!psaa.test($('#pass').val())){
					$('#pass1').html('密码格式不合法 !');
					flan3 = false;
				}else{
					$('#pass1').html('');
					flan3 = true;
				}
			}
			$('#passto').blur(fn3);
			function fn3(){
				
				if(!($('#passto').val() ==  $('#pass').val())){
					$('#passto1').html('请输入正确的密码。');
//					console.log(1)
					flan4 = false;
				}else {
					$('#passto1').html('');
					flan4 = true;
				}
			}
			function fn4(){
				if($('#gouxuan').get(0).checked ==  false){
					$('#tiaokuan').html('您必须接受我们的用户条款。');
					flan5 = false;
				}else{
					$('#tiaokuan').html('');
					flan5 = true;
				}
			}
			$('#zhuce').click(function(){
				fn();
				fn1();
				fn2();
				fn3();
				fn4();
				if(flan1 == true && flan2 == true && flan3 == true && flan4 == true && flan5 == true){
					loca.username = $('#name').val();
					loca.mall = $('#emer').val();
					loca.pass = $('#pass').val();
					location.href = 'lend.html'
				}
			});
			//
			//
			$('#yiwen').click(function(){
				location.href = 'lend.html '
			})
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
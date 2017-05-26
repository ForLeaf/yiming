;
$(function(){
	$('footer').load('html/footer.html',function(){
		$('footer ul li:nth-child(1)').on('click',function(){
			window.location.href='./index.html';
		})

		$('footer ul li:nth-child(2)').on('click',function(){
			$('main').scrollTop('100')
		})

		$('footer ul li:nth-child(3)').on('click',function(){
			window.location.href='./car.html'
		})

		$('footer ul li:nth-child(4)').on('click',function(){
			window.location.href='./html/personal_rem.html';
		})


	});
	$('.carousel').on('mouseenter',function(){
		$(this).find('.carousel-control').show();
	})
	$('.carousel').on('mouseleave',function(){
		$(this).find('.carousel-control').hide();
	})
	var totop;
	$('main').scroll(function(){
		
		totop=$(this).scrollTop();
		var hei=$(window).innerHeight();
		
		if(totop>hei/10){
			$('.toTop').show();
		}
		if(totop<hei/10){
			$('.toTop').hide();
		}

	})
	$('.toTop a').on('click',function(event){
		event=event||window.event;
		event.preventDefault();
		$('main').animate({scrollTop:'0px'});
		
	})
	
	//点击跳转
	$('main .third ul li:first-child').click(function(){
		$(this).find('a').attr({
			href:'html/list_zyxh.html'
		})
	})

	$('main .third ul li:nth-child(2)').click(function(){
		window.location.href='./html/list_xhtz.html'
	})

	$('main .third ul li:nth-child(3)').click(function(){
		window.location.href='./html/list_mzgh.html'
	})

	$('main .third ul li:nth-child(4)').click(function(){
		window.location.href='./html/list_rhcp.html'
	})

	$('main .third ul li:nth-child(5)').click(function(){
		window.location.href='./html/list_zyrf.html'
	})

	$('main .third ul li:nth-child(6)').click(function(){
		window.location.href='./html/list_zytf.html'
	})

	$('main .third ul li:nth-child(7)').click(function(){
		window.location.href='./html/list_zyzx.html'
	})
	
	$('main .third ul li:nth-child(8)').click(function(){
		window.location.href='./html/list_mfgj.html'
	})
	//点击第一个轮播图
	$('main .carousel').on('click','img',function(){
		window.location.href='./html/list_xhtz.html'
	})
	$('main .forth').on('click','a',function(){
		$(this).attr({
			href:'./html/list_zyxh.html'
		})
	})
	$('main .fifth').on('click','a',function(){
		$(this).attr({
			href:'./html/list_mzgh.html'
		})
	})
	$('main .sixth .carousel').click(function(){
		window.location.href='./html/list_zytf.html'
	})
	$('main .seventh ul li').on('click',function(){
		window.location.href='./details.html'+'?goodsid='+$(this).attr('class');
	})
	$('main .thirty-first ul li').on('click',function(){
		window.location.href='./details.html'+'?goodsid='+$(this).attr('class');
	})

	$('main .thirty-third ul li').on('click',function(event){
		event.preventDefault();
		window.location.href='./details.html'+'?goodsid='+$(this).attr('class');
	})
	$('main .thirty-forth p').on('click',function(event){
		event.preventDefault();
		window.location.href='./html/list_mfgj.html';
	})

	//头部点击搜索时
	$('header form span').on('click',function(){    
          // $(this).prev().val()
           var encodeparam = encodeURI($(this).prev().val());
      	window.location.href='./html/search.html'+'?keyword='+encodeparam;
      });
  
})
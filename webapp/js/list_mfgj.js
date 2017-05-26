
;
$(function(){
	$('header').load('../html/list_common.html',function(){
        $('header >ul >span').on('click',function(){
        $('.search').slideToggle();
    })
    
    $('header >ul').on('click','li',function(){
        $(this).siblings().find('strong').hide();

        $(this).find('strong').show();
        n++;
        $(this).find('strong').css({
            transform:`rotate(${n*180}deg)`
        })  
    })
    });
	$('footer').load('../html/footer.html');

    
    
    var n=1;
	var totalData;
    var num=0;
    //页面刷新就想数据库请求数据
    $.post(erp.baseUrl +'searchProducts',{
        // keyword : $('#keyword').val()
        keyword:'美发工具'
    },function (response) {
        //这里的response是搜索到的所有数据
        //这里获取前14个数组
        totalData=response;
        var data=response.slice(0,14);
            $('main ul').html(data.map(function(item){
                return  `<li class="${item.goodsid}"><div><a href="#">
                <img src="../img/goodsimg/${item.goodsimg}.jpg"></a></div>
                <div><a href="#">${item.goodstitle}</a></div><div>
                <p>￥<span>${item.goodsprice}</span></p>
                <p>已售<span>${item.hassole}</span>件</p></div></li>`
            }))
        
        
    }) 

    //到页面最底部时，刷新页面
    $('main').scroll(function(){
        //获取main的高度
        var mTop=$(this).find('ul').height();
        var sTop=$(window).innerHeight();
        //获取滚轮滚动过的距离
        var toTop=$(this).scrollTop();
        var res=mTop-sTop-toTop;
        // console.log(res)
        if(res<-90){
            num++;
            var data1=totalData.slice(num*14,(num+1)*14);
        $('main ul')[0].innerHTML+=data1.map(function(item){
                return  `<li class="${item.goodsid}"><div><a href="#">
                <img src="../img/goodsimg/${item.goodsimg}.jpg"></a></div>
                <div><a href="#">${item.goodstitle}</a></div><div>
                <p>￥<span>${item.goodsprice}</span></p>
                <p>已售<span>${item.hassole}</span>件</p></div></li>`
            }).join('');
        }
    })

     //点击页面之后跳转
   $('main ul').on('click','li',function(){

        window.location.href='../details.html'+'?goodsid='+$(this).attr('class');

   })
})
;
$(function(){
	$('footer').load('footer.html',function(){
        $('footer ul li:first-child').click(function(){
            window.location.href='../index.html'
        })
    });
	$('header >ul >span').on('click',function(){
		$('.search').slideToggle();
	})
	var n=1;
	$('header >ul').on('click','li',function(){
		$(this).siblings().find('strong').hide();

		$(this).find('strong').show();
		n++;
		$(this).find('strong').css({
			transform:`rotate(${n*180}deg)`
		})	

     
	})
    var totalData;
    var num=0;
    showContent();
    function showContent(){
        
        //页面刷新就想数据库请求数据
        $.post(erp.baseUrl +'searchProducts',{
            // keyword : $('#keyword').val()
            keyword:'专业洗护'
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

    }

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
	
    //点击按钮排序
    //点击时获取数组,修改数组的排列方式
      $('header ul li:nth-child(4)').click(function(){
            // var arr=[];
            // totalData.forEach(function(item){
            //     arr.push(parseFloat(item.hassole));
            // })
            //  console.log(arr);
            //  for(var i=0;i<arr.length;i++){
            //     for(var j=i+1;j<arr.length;j++){
            //         if(arr[i]<arr[j]){
            //             var temp=[]
            //             temp=arr[i];
            //             arr[i]=arr[j];
            //             arr[j]=temp;
            //         }

            //     }

            //  }
            // totalData.sort(function(a,b){

            //     return parseFloat(a.hassole) > parseFloat(b.hassole)
            // });
            // console.log(totalData)
            
                // var compare = function (prop) {
                //         return function (obj1, obj2) {
                //             var val1 = obj1[prop];
                //             var val2 = obj2[prop];
                //             if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                //                 val1 = Number(val1);
                //                 val2 = Number(val2);
                //             }
                //             if (val1 < val2) {
                //                 return -1;
                //             } else if (val1 > val2) {
                //                 return 1;
                //             } else {
                //                 return 0;
                //             }            
                //         } 
                //     }

                // totalData.sort(compare(totalData.hassole));

                // console.log(totalData)



      })
    
})
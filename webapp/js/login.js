$(function () {
    // 表单验证-----------------
    $('#input-phone').blur(function(){
        var $phone = $('#input-phone').val();
        if(!/^1[34578]\d{9}$/.test($phone)){
            $('#input-phone').parent().siblings('.sm_box').text('手机号不合法').show(600);
            $('#input-phone').val('');
            setTimeout(function(){
                    $('#input-phone').parent().siblings('.sm_box').hide(600);
                },1000);
            return false;
        }
    });


    /*密码  
        长度大于6个字符，小于12 
        不能包含空格*/
    $('#input-password').blur(function(){
        var $password = $('#input-password').val();
        if(!/^\S{6,12}$/.test($password)){
            $('#input-password').parent().siblings('.sm_box').text('请输入6-20个字符').show(600);
            $('#input-password').val('');
            setTimeout(function(){
                    $('#input-password').parent().siblings('.sm_box').hide(600);
                },1000);
            return false;
        }
    });

    //点击登录按钮-------------------
    $('#logBtn').click(function () {
        if ($('#input-phone').val()==false || $('#input-password').val()==false) {
                //弹窗----------------
                $('.tips').show(600);
                $('.success').hide();
                $('.fail').hide();
                $('.empty').show(600);
                setTimeout(function(){
                    $('.empty').hide(600);
                },1500);
        }else{
                $.post(erp.baseUrl +'login',{
                username : $('#input-phone').val(),
                password : $('#input-password').val()
            },function (response) {
                var data = response;
                if(data.status){
                    // alert('登录成功');
                    //弹窗----------------
                    $('.tips').show(600);
                    $('.empty').hide();
                    $('.fail').hide();
                    $('.success').show(600);
                    setTimeout(function(){
                        $('.success').hide(600);
                    },1500);

                    location.href = "../index.html";


                }else{
                    // alert('登录失败，用户名或密码错误');
                    //用户名标红----------------------
                    $('#input-phone').addClass('active');

                    //弹窗----------------
                    $('.tips').show(600);
                    $('.empty').hide();
                    $('.success').hide();
                    $('.fail').show(600);
                    setTimeout(function(){
                        $('.fail').hide(600);
                    },1500);
                }
            });
        }
    });


    $('#update').click(function () {
        $.post(erp.baseUrl +'update',{
            username : $('#username').val(),
            password : $('#password').val()
        },function (response) {
            var data = response;
            if(data.status){
                alert('登录成功');



            }else{
                alert('登录失败，用户名或密码错误');
            }
        });
    });


    //绑定点击事件：点击时清空输入框
    $('.item-input').on('click','>a',function(){
        $(this).siblings().val('');
    });

});

$(function() {
    $("#add_picture").fix({
        float: 'left',
        skin: 'green',
        durationTime: false,
        stylewidth: '220',
        spacingw: 0,
        spacingh: 260
    });
    
    
    $(document).ready(function () {
        //初始化宽度、高度
        $(".widget-box").height($(window).height());
        $(".page_right_style").height($(window).height());
        $(".page_right_style").width($(window).width() - 220);
        
        //当文档窗口发生改变时 触发
        $(window).resize(function () {
            $(".widget-box").height($(window).height());
            $(".page_right_style").height($(window).height());
            $(".page_right_style").width($(window).width() - 220);
        });
    });
    /******树状图********/
    var setting = {
        view: {
            dblClickExpand: false,
            showLine: false,
            selectedMulti: false
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: ""
            }
        },
        callback: {
            beforeClick: function (treeId, treeNode) {
                var zTree = $.fn.zTree.getZTreeObj("tree");
                if (treeNode.isParent) {
                    zTree.expandNode(treeNode);
                    return false;
                } else {
                    demoIframe.attr("src", treeNode.file + ".html");
                    return true;
                }
            }
        }
    };
    
    var zNodes = [
        {id: 1, pId: 0, name: "商城分类列表", open: true},
        {id: 11, pId: 1, name: "蔬菜水果"},
        {id: 111, pId: 11, name: "蔬菜"},
        {id: 112, pId: 11, name: "苹果"},
        {id: 113, pId: 11, name: "大蒜"},
        {id: 114, pId: 11, name: "白菜"},
        {id: 115, pId: 11, name: "青菜"},
        {id: 12, pId: 1, name: "手机数码"},
        {id: 121, pId: 12, name: "手机 "},
        {id: 122, pId: 12, name: "照相机 "},
        {id: 13, pId: 1, name: "电脑配件"},
        {id: 131, pId: 13, name: "手机 "},
        {id: 122, pId: 13, name: "照相机 "},
        {id: 14, pId: 1, name: "服装鞋帽"},
        {id: 141, pId: 14, name: "手机 "},
        {id: 42, pId: 14, name: "照相机 "},
    ];
    
    var code;
    
    function showCode(str) {
        if (!code) code = $("#code");
        code.empty();
        code.append("<li>" + str + "</li>");
    }
    
    $(document).ready(function () {
        var t = $("#treeDemo");
        t = $.fn.zTree.init(t, setting, zNodes);
        demoIframe = $("#testIframe");
        //demoIframe.bind("load", loadReady);
        var zTree = $.fn.zTree.getZTreeObj("tree");
        //zTree.selectNode(zTree.getNodeByParam("id",'11'));
    });
    
    //文件上传
    $('#subBtn').click(function(){
        $('#form-article-add').ajaxSubmit({
            type: 'post',
            url: erp.baseUrl + 'upload',
            success:function(data){
                console.log(data);
            },
            error:function(XmlHttpRequest,textStatus,errorThrown){
                console.log(XmlHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })
    })
    
})
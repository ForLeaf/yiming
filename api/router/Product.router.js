var multer = require ('multer');

var apiResult = require('../module/apiResult.module.js');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var db = require('../module/db.moudle.js');

var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../upload')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })

exports.Register = function(app){
	app.post('/upload', upload.array('photos', 12), function(req, res) {
		console.log(req.files);  
		console.log(req.body); 	 	
	 	res.send('"上传成功"'); 
	});
	
	app.post('/getProducts', urlencodedParser, function (request,response) {
	    console.log(request.body);
	    var data = request.body;
	    
        db.exists('goodslist', data,['goodsid','classify1','classify2'], function(data){
            if(data.length > 0){
                response.send(data)
            } else {
                response.send(apiResult(false, '用户名错误'));
            }
        })
    })
    
    app.post('/searchProducts', urlencodedParser, function (request,response) {
        var data = request.body;
        
        var keyword = data.keyword;
        
        var arr = ['专业洗护','洗护套装','美妆个护','日化产品','专业染发','专业烫发','专业造型','美发工具'];
        
        if(arr.indexOf(keyword) > -1){
            var obj = {};
            obj.classify1 = keyword;
            db.exists('goodslist',obj,['classify1'],function (data) {
                if(data.length > 0){
                    response.send(data);
                } else {
                    response.send(apiResult(false, '没有找到相关的产品'));
                }
            })
        }else {
            var reg = new RegExp("^.*" + keyword + ".*$","i");
            db.search('goodslist', reg, function(data){
        
                if(data.length > 0){
                    response.send(data);
                } else {
                    response.send(apiResult(false, '没有找到相关的产品'));
                }
            })
        }
    })
    
}
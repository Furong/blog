


layui.define(['common','api','form','layer'],function(exports){
	var common = layui.common;
	var api = layui.api;
	var laytpl = layui.laytpl;
	var $ = layui.jquery;
	var form = layui.form();
	var layer = layui.layer;
	
	//监听提交
  	form.on('submit(formDemo)', function(data){
    		api.addYoulian(data.field,function(res){
    			if(res.code == 0){
    				layer.msg(res.msg);
    				location.href = 'youlian.html';
    			} else {
    				layer.msg(res.msg || res.code, {
					shift: 6
				});
    			}
    		});
    		return false;
  	});
	
	exports('youlian-add',{});
	
});
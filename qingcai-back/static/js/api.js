/**
 * 青菜萝卜 API
 * 所有异步请求的地址
 */

layui.define(['laytpl', 'laypage', 'layer'],function(exports) {
	var $ = layui.jquery;
	var laypage = layui.laypage;
	var layer = layui.layer;
	var laytpl = layui.laytpl;
	
//	var BASE_PREFIX = "http://www.huding.name";
	
	var BASE_PREFIX = "http://localhost";

	var pageSize = 10;
	
	var api = {
		/**
		 * 检查是否登录的地址
		 */
		CHECK_LOGIN_URL:BASE_PREFIX + "/luobo/admin/checkLogin",
		/**
		 * 登录地址
		 */
		LOGIN_URL:BASE_PREFIX + "/luobo/admin/login",
		/**
		 * 退出地址
		 */
		LOGOUT_URL:BASE_PREFIX + "/luobo/admin/logout",
		
		YOULIAN_SHOW_URL:BASE_PREFIX + "/luobo/admin/youlian",
		YOULIAN_ADD_URL:BASE_PREFIX + "/luobo/admin/youlian/add",
		YOULIAN_EDIT_URL:BASE_PREFIX + "/luobo/admin/youlian/edit",
		YOULIAN_DEL_URL:BASE_PREFIX + "/luobo/admin/youlian/del",
		
		
		BLOG_SHOW_URL:BASE_PREFIX + "/luobo/admin/blog",
		BLOG_ADD_URL:BASE_PREFIX + "/luobo/admin/blog/add",
		BLOG_EDIT_URL:BASE_PREFIX + "/luobo/admin/blog/edit",
		BLOG_DEL_URL:BASE_PREFIX + "/luobo/admin/blog/del",
		
		
		PASSWORD_URL:BASE_PREFIX + "/luobo/admin/profile/password",
		
		

	}
	
	var action = {
		//Ajax
		ajax: function(url, data, success, options,async) {
			var that = this;
			options = options || {};
			data = data || {};
			return $.ajax({
				type: options.type || 'post',
				dataType: options.dataType || 'json',
				data: data,
				url: url,
				async:async || true,
				success: success || function(){
					layer.msg("success回调函数不能为空");
				},
				error: function(e) {
					options.error || layer.msg('请求异常，请重试', {
						shift: 6
					});
				}
			});
		},
		/**
		 * 异步Ajax
		 * @param {Object} url
		 * @param {Object} data
		 * @param {Object} success
		 * @param {Object} options
		 */
		doAjax: function(url, data, success, options) {
			action.ajax(url,data,success,options,true);
		},
		
		/**
		 * 同步Ajax
		 * @param {Object} url
		 * @param {Object} data
		 * @param {Object} success
		 * @param {Object} options
		 */
		doSyncAjax:function(url,data,success,options){
			action.ajax(url,data,success,options,false);
		},
		
		checkLogin:function(success,error) {
			var options = {
				error:error
			};
			action.doSyncAjax(api.CHECK_LOGIN_URL,{},success,options);
		},
		
		login:function(params,success){
			action.doAjax(api.LOGIN_URL,params,success);
		},
		logout:function(params,success){
			action.doAjax(api.LOGOUT_URL,params,success);
		},
		
		showYoulian:function(params,success){
			action.doAjax(api.YOULIAN_SHOW_URL,params,success);
		},
		addYoulian:function(params,success){
			action.doAjax(api.YOULIAN_ADD_URL,params,success);
		},
		editYoulian:function(params,success){
			action.doAjax(api.YOULIAN_EDIT_URL,params,success);
		},
		delYoulina:function(params,success){
			action.doAjax(api.YOULIAN_DEL_URL,params,success);
		},
		password:function(params,success){
			action.doAjax(api.PASSWORD_URL,params,success);
		}
	}
	exports('api', action);
});
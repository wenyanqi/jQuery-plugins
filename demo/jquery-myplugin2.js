;
(function($){

	//创建插件中的一些默认值
	var defaultOptions = {
		'backgroundColor': 'blue',
		'width': '100px',
		'height': '100px'
	};

	//把插件的所有操作封装到这个对象中去
	var methods = {
		//初始化插件的操作
		init: function(options) {
			//创建一些默认值
			var settings = $.extend(defaultOptions, options);

			var $this = $(this);
			console.log($this.data('tooltip'));
			$this.css("background-color",settings.backgroundColor);
			return $(this);
		},
		width: function(newwidth) {
			return $(this).css("width",newwidth);
		},
		open: function() {
			return this.each(function() {
				$(this).css("display","block");
			});
		},
		close: function() {
			return this.each(function() {
				$(this).css("display","none");
			});
		},
		success: function(val) {
			return this.each(function() {

				//应该在css中提前定义好success的样式，然后
				var $this = $(this);
				//$this.addClass(".success");
				$(this).css("background-color","blue");
				$(this).text("success "+val);
			});
		},
		fail: function(val) {
			return this.each(function() {
				$(this).css("background-color","red");
				$(this).text("failed "+val);
			}); 
		}
	};

	$.fn.tooltip = function (method) {
		//根据传入参数method的不同，调用不同的方法
		if(methods[method]) {
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		} else if(typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + 'does not exist on jQuery.tooltip');		
		}
	};

})(jQuery);


//调用说明
//调用init
$("div").tooltip();

//调用init
$("div").tooltip({"backgroundColor":"gray"});

//调用success方法
$("div").tooltip("success","success info");

//调用close
$("div").tooltip("close");

;
(function($){

	$.fn.slider.defaultOptions = {
		'imageNum': 0;
		'imageWidth': '0px';
		'time': 1000;
		'current': 0;
	} 
	

	var methods = {
		init: function(options) {
		
			var $this = $(this);
			var defaultOptions.imageNum = $this.children("li").length;
			var defaultOptions.imageWidth = $this.css("width");

			var setting = $.extend($.fn.slider.defaultOptions,defaultOptions, options);

			return $(this);
		},
		start: function() {
			
			setInterval(function(){
				if($.fn.slider.defaultOptions.current==
					$.fn.slider.defaultOptions.imageWidth*($.fn.slider.defaultOptions.imageNum-1)) {
				  $.fn.slider.defaultOptions.current = 0;
				}else {
				  $.fn.slider.defaultOptions.current += $.fn.slider.defaultOptions.imageWidth;
				}
				$(this).css("margin-left","-"+$.fn.slider.defaultOptions.current+"px");
			},$.fn.slider.defaultOptions.time);
		},
		next: function() {
			
		}

	};

	$.fn.slider = function (method) {
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
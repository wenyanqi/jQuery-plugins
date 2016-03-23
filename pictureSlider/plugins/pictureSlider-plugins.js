;
(function($){


	

	var methods = {
		init: function() {
		
			// var $this = $(this);
			// var defaultOptions.imageNum = $this.children("li").length;
			// var defaultOptions.imageWidth = $this.css("width");

			// var setting = $.extend($.fn.slider.defaultOptions,defaultOptions, options);

			return $(this);
		},
		start: function() {
			
			$this = $(this);
			
			setInterval(function(){
				$this.css("margin-left","-"+defaultOptions.current+"px");
				if(defaultOptions.current==
					defaultOptions.imageWidth*(defaultOptions.imageNum-1)) {
				  defaultOptions.current = 0;
				}else {
				  defaultOptions.current += defaultOptions.imageWidth;
				}
				
			},defaultOptions.time);
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
	var defaultOptions = {
		'imageNum': 4,
		'imageWidth': 600,
		'time': 1000,
		'current': 0
	};
})(jQuery);



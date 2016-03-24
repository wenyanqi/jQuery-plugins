;
(function($){


	var interval ;

	var defaultOptions = {
		'animate': 0,  //0--show，hide； 1--fadeIn,fadeOut 2--slideDown,slideUp  3--animate
		'imageNum': 4,
		'imageWidth': 600,
		'time': 1000,
		'current': 0
	};

	var numList ;

	var methods = {
		init: function() {
		
			// var $this = $(this);
			// var defaultOptions.imageNum = $this.children("li").length;
			// var defaultOptions.imageWidth = $this.css("width");

			// var setting = $.extend($.fn.slider.defaultOptions,defaultOptions, options);
			

			return $(this);
		},
		start: function(options) {
			$this = $(this);
			var imageList = $this.children("li");
			numList = $(".number").children("li");
			var options_new = $.extend(defaultOptions, options);
			if(options_new.current >= options_new.imageNum) {
				alert("图片总数"+options_new.imageNum+" <=" + "当前图片下标" +current);
			}

			//判断是不是已经start过
			if(interval==undefined) {
				
				//$this.css("margin-left","-"+options_new.current*options_new.imageWidth+"px");
				interval = setInterval(function(){

					//imageList.eq(options_new.current).hide();
					//imageList.eq(options_new.current).slideUp();
					numList.eq(options_new.current).toggleClass("current");
					if(options_new.animate == 0) {
						imageList.eq(options_new.current).hide();	
					} else if(options_new.animate == 1) {
						imageList.eq(options_new.current).fadeOut();
					} else if(options_new.animate == 2) {
						imageList.eq(options_new.current).slideUp();
					} 

					if(options_new.current == options_new.imageNum-1 ) {

					  options_new.current = 0;
					}else {
					  options_new.current ++;
					}
					//$this.css("margin-left","-"+options_new.current*options_new.imageWidth+"px");
					//setTimeout(function(){imageList.eq(options_new.current).slideDown();},600);
					if(options_new.animate == 0) {
						imageList.eq(options_new.current).show();	
					} else if(options_new.animate == 1) {
						imageList.eq(options_new.current).fadeIn();
					} else if(options_new.animate == 2) {
						imageList.eq(options_new.current).slideDown();
					} else {
						
						$this.animate({
					        "margin-left": "-"+options_new.current*options_new.imageWidth+"px"
					        
					    },"slow");
												
					}
					numList.eq(options_new.current).toggleClass("current");
					
				},options_new.time);	
			}
			
			return $(this);
		
		},
		stop: function() {
			clearInterval(interval);
			interval = undefined;
		},
		changeCurrent: function(num) {
			
			defaultOptions.current = num;

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

	
;
(function($){


	var interval ;

	var d_options = {
		'animate': 3,  //0--show，hide； 1--fadeIn,fadeOut 2--slideDown,slideUp  3--animate
		'imageNum': 4,
		'imageWidth': 600,
		'time': 2000,
		'current': 0
	};

	var numList;

	function prev() {

	}

	var methods = {
		init: function() {
		
			var $this = $(this);
			var lists = $this.children("li");

			d_options.imageNum = $this.children("li").length;
			d_options.imageWidth = parseInt($this.children("li").css("width"));

			var lastImg = document.createElement("li");
			var firstImg = document.createElement("li");
			lastImg.innerHTML = lists[d_options.imageNum-1].innerHTML;
			firstImg.innerHTML = lists[0].innerHTML;
			$this.append(firstImg);
			$this.prepend(lastImg);

			//创建下面的序号1,2,3,4
			var numberElement = document.createElement("ul");
			numberElement.className = "number";
			for(var  i=1; i<=d_options.imageNum;i++) {
				var liElement = document.createElement("li");
				liElement.innerHTML = i;
				numberElement.appendChild(liElement);
			}
			numberElement.firstChild.className = "current";

			//numberElement = $this.after(numberElement);

			//创建左右按钮
			var prevElement = document.createElement("div");
			prevElement.className = "prev";
			prevElement.innerHTML = "&lt;";
			var nextElement = document.createElement("div");
			nextElement.className = "next";
			nextElement.innerHTML = "&gt;";

			$this.after(numberElement,prevElement,nextElement);

			return $(this);
		},
		start: function(options) {
			$this = $(this);
			var imageList = $this.children("li");
			numList = $(".number").children("li");

			d_options = $.extend(d_options, options);
			if(d_options.current >= d_options.imageNum) {
				alert("图片总数"+d_options.imageNum+" <=" + "当前图片下标" +current);
			}

			//判断是不是已经start过
			if(interval==undefined) {
				
				//$this.css("margin-left","-"+d_options.current*d_options.imageWidth+"px");
				interval = setInterval(function(){

					// imageList.eq(d_options.current).hide();
					// imageList.eq(d_options.current).slideUp();
					numList.eq(d_options.current).toggleClass("current");
					if(d_options.animate == 0) {
						imageList.eq(d_options.current).hide();	
					} else if(d_options.animate == 1) {
						imageList.eq(d_options.current).fadeOut();
					} else if(d_options.animate == 2) {
						imageList.eq(d_options.current).slideUp();
					} 

					
					d_options.current ++;
					
					if(d_options.animate == 0) {
						imageList.eq(d_options.current).show();	
					} else if(d_options.animate == 1) {
						imageList.eq(d_options.current).fadeIn();
					} else if(d_options.animate == 2) {
						imageList.eq(d_options.current).slideDown();
					} else {
						
						$this.animate({"margin-left": "-"+(d_options.current+1)*d_options.imageWidth+"px"},
							{duration:'slow',complete:function(){
								
								if(d_options.current == d_options.imageNum) {
									d_options.current = 0;
									
									$this.css("margin-left","-"+(d_options.current+1)*d_options.imageWidth+"px");
									numList.eq(d_options.current).toggleClass("current");
								}
							}
						});
						
					}
					numList.eq(d_options.current).toggleClass("current");
					
				},d_options.time);	
			}
			
			return $(this);
		
		},
		stop: function() {
			clearInterval(interval);
			interval = undefined;
		},
		changeCurrent: function(num) {
			numList.eq(d_options.current).toggleClass("current");
			d_options.current = num;
			
			$this.css("margin-left","-"+(d_options.current+1)*d_options.imageWidth+"px");
			numList.eq(d_options.current).toggleClass("current");

		},
		prev: function(num) {
			numList.eq(d_options.current).toggleClass("current");
			if(d_options.current == 0) {
				d_options.current = d_options.imageNum-1;
			}else {
				d_options.current --;
			}
			$this.css("margin-left","-"+(d_options.current+1)*d_options.imageWidth+"px");
			numList.eq(d_options.current).toggleClass("current");
		},
		next: function(num) {
			numList.eq(d_options.current).toggleClass("current");
			if(d_options.current == d_options.imageNum-1) {
				d_options.current = 0;
			}else {
				d_options.current ++;
			}
			$this.css("margin-left","-"+(d_options.current+1)*d_options.imageWidth+"px");
			numList.eq(d_options.current).toggleClass("current");
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


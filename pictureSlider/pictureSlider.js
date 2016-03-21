
//方法一： 把所有的图片dom存储起来，然后每次current+1，
//container清空，把数组中对应的dom元素添加到container中
$(document).ready(function(){
	var imgDom = $("#pictureContainer li");
	
	var current = 0;
	
	setInterval(function(){
		$(".main").empty();
		$(".main").append(imgDom[current]);
		
		if(current == imgDom.length-1) {
			current = 0;
		}else {
			current ++;
		}
		
		
		
	}, 2000);
});

//方法二：把所有图片的链接记录在数组里面，每次current加1
//在container中增加一个img标签，然后把src设置为数组中对应的链接

$(document).ready(function(){
	var imgArray = new Array();
	var img_len = 0;
	$("#pictureContainer img").each(function(){
		imgArray[img_len] = $(this).attr("src");
		img_len ++;
	});

	
	var current = 0;
	
	setInterval(function(){
		$(".main1 img").attr("src",imgArray[current]);
		if(current == img_len-1) {
			current = 0;
		}else {
			current ++;
		}
	}, 2000);
});


//方法三：所有的图片都排成一行，每次设置main的偏移量，从而显示对应的图片

$(document).ready(function(){
    var curLeft = 0;
	setInterval(function(){
		if(curLeft==1800) {
		  curLeft  = 0;
		}else {
		  curLeft += 600;
		}
		$(".main2 ul").css("margin-left","-"+curLeft+"px");
	},2000);
});
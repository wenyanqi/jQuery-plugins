# jQuery 插件开发学习第一篇

通过网上的一些教程，最终完成了这个简单的插件。插件包含width，open，close，success，fail这个方法。

##使用说明
//调用init
```
$("div").tooltip();
```
//调用init
```
$("div").tooltip({"backgroundColor":"gray"});
```
//调用success方法
```
$("div").tooltip("success","success info");
```

//调用close
```
$("div").tooltip("close");
```

其实这都算不上一个插件，但是可以学习的主要的jQuery插件开发的思路，具体的细节可以参考代码中的注释。但是这种方式在实际调用时觉得不太方便，正常在调用一个插件的方法的时候，我记得应该是直接`$('div').success()`。

后来看了项目中几个jQuery插件的源码，发现结构和这个不太一样

# jQuery插件开发学习第二篇

看了以前用的一些插件的源码，发现与我上面实现的不太一样，特此分析一下bootstrap-slider.js的源码结构：
```javascript

!function( $ ) {

    var Slider = function(element, options) {
        //初始化一个Slider的样式
    };

    //将插件对应的方法通过原型的方式添加
    Slider.prototype = {
        //指定构造函数
        constructor: Slider,

        showTooltip: function(){},
        
        hideTooltip: function(){},

        layout: function(){},

        setValue: function(val) {}
    };

    //在jquery中添加slider函数，在调用的时候，通过这个接口调用
    $.fn.slider = function ( option, val ) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('slider'),
                options = typeof option === 'object' && option;

            //如果data不存在，就new slider出来，如果有就说明已经new过了
            //通过获取设置slider data的方式来判断什么时候调用构造函数
            if (!data)  {
                $this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults,options))));
            }
            if (typeof option == 'string') {
                data[option](val);
            }
        })
    };

    //定义options，给定默认值
    $.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: 'horizontal',
        value: 5,
        selection: 'before',
        tooltip: 'show',
        handle: 'round',
        formater: function(value) {
            return value;
        }
    };

    //设置slider的构造函数
    $.fn.slider.Constructor = Slider;

}( window.jQuery );

```

使用：
```javascript
var mySlider = $("input.slider").slider();
 
// Call a method on the slider
var value = mySlider.slider('getValue');
 
// For non-getter methods, you can chain together commands
mySlider
    .slider('setValue', 5)
    .slider('setValue', 7);
```

个人更喜欢这种方式，目前这两种开发方式都比较常见。

又看了一下jQuery.form的源码，发现，它是直接定义了方法：
```javascript
 e.fn.ajaxFormUnbind = function() {
       
}, e.fn.formToArray = function(t, r) {
    
},
```

没有去用对象的概念将方法以及相关配置封装起来，直接操作的是jquery对象，这样写的好处就是可以直接这样调用：
```javascript
$("form").formToArray();
```
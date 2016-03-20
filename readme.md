# jQuery 插件开发学习

昨天开始看《jQuery基础教程》，主要是想查缺补漏，后来发现看到jQuery的某个方法的时候，对于它在源码中的实现部分很感兴趣。看到第八章插件开发的时候，就想自己试一试。

在学习的时候，主要参考了一下教程：
- [如何自己开发一款js或者jquery插件](http://www.haorooms.com/post/js_jquery_chajian)
- [深入理解jQuery插件开发](http://blog.jobbole.com/30550/)

## jQuery插件开发模式
一般有三种开发方式：
- 通过`$.extend()`来扩展jQuery
- 通过`$.fn`像jQuery添加新的方法
- 通过`$.widget()`应用jQuery UI的部件工厂方式创建

第一种$.extend()相对简单，一般很少能够独立开发复杂插件，第三种是一种高级的开发模式。这里主要学习了通过第二种方式进行插件开发。

## 1. 一个即时执行函数
每个插件的代码是被包含在一个即时执行的函数中，外部无法访问到函数内部的公共变量和对象命名空间，可以很好的防止变量名和已有代码的冲突。
```javascript
(function ($) {
    //插件代码
})(jQuery);
```

## 2. 插件：一个函数
一个jQuery插件本质上是我们塞进jQuery命名空间中一个庞大的函数。
一般插件的开发是如下定义的：
```javascript
$.fn.pluginName = function() {
    
}
```

所以你的插件如果不返回一个固有值，你应该在你插件function的作用域里返回this关键字。

最终按照网上的教程，我写出来了这样的插件
```javascript

```
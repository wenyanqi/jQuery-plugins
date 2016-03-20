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

后来看了项目中几个jQuery插件的源码，发现结构和这个很不一样，用法和我们所习惯的是一致的。

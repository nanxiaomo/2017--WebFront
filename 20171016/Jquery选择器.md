# jquery 选择器学习练习笔记
### $
 $() 选择器是JQuery的核心，它的使用使得原生Js的选择变得简单。

####  选择器
  + id 选择器
```js
  var el = document.getElmentById("test");
  //在jQuery中可以表示为
  var el = $('#test');
  // 在css中选择器表示
  #test {}
```

  + class 选择器
```js
   var el = document.getElmentsByClassName("red");
   //在jQuery中可以表示为
   var el = $('.red');
   // 在css中选择器表示
   .red {}
```
   + tag 选择器
   
```js
   var el = document.getElementsByTagName("input");
   //在jQuery中可以表示为
   var el = $('input');
   //在css中选择器表示
   input{}
```
   + 属性选择器
   
```js
   // 在原生js中有两种方法
   //1. 使用querySelectorAll
   var el = document.querySelectorAll('[name="email"]');
   // 2.使用自己写一个JavaScript 选择函数
   function selector(attribute, value) {
            var all = document.getElementsByTagName('*');
            for (var i = 0; i < all.length; i++) {
                if (all[i].getAttribute(attribute) == value) {
                    return all[i];
                }
            } }
    var el = selector("name","email");
    //在jQuery中可以表示为
    var el = $("[name = 'email']");
    //在css中的表示
    [name=“email”]
```
    
### 选择器数组
#### 选择器为空时
当选择的选择器为空时，返回的对象为
```
[]
```
jQuery的选择器不会返回undefined或者null，这样的好处是你不必在下一行判断
```js
if (div === undefined)。
```
#### 获得选择器对象
```js
    var el = $(".test");
    var el0 =el.get(0);
```    
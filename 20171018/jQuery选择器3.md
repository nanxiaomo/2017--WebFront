# 查找和筛选
    
    <!--例子-->
    <div class="test">
        <ul class="fruit">
            <li class="apple">苹果</li>
            <li class="banana">香蕉</li>
            <li class="cherry">樱桃</li>
        </ul>
    </div>
 
之前的选择器可以选取DOM元素，我们可以对选择的元素进行进一步的查找和选择。
### 查找
+ find()
find()可以在选择器的后方进行进一步的查找

```
   //选中li.apple所在的Dom元素
   var el = $(".fruit").find(".apple")
```
+ parent()

向上寻找元素
```js
    var el = $(".apple");
    var pel = el.parent(); //此时查找的元素为ul
    var pels = el.parent('.fruit') //指出父级元素的筛选条件
```
+ next()和prev()

可以查找选择器的左右元素
```js
    var el = $('.banana');
    var nextel = el.next(); //查找到的是【<li class="cherry">樱桃</li>】
    var prevel = el.prev(); //查找到的是【<li class="apple">苹果</li>】
```
+ filter()

 filter()方法可以过滤掉不符合选择器条件的节点：
```js
    var el = $('li');
    var fel = el.filter('.banana');//过滤去选择的li中banana
```
 filter中也可以包含的是一个过滤函数

 + map()

 map()方法把一个jQuery对象包含的若干DOM节点转化为其他对象：
```js
    var el = $('li');
    var arr = el.map(function () {
      return this.innerHTML;
    }).get(); //将选择对象中的文字组成一个数组对象。
```
 + first()、last()和slice()
 
 一个jQuery对象如果包含了不止一个DOM节点，first()、last()和slice()方法可以返回一个新的jQuery对象，把不需要的DOM节点去掉：
```js
   var el = $('li');
   var fel = el.first(); //【<li class="apple">苹果</li>】
   var lastel = el.last(); //【<li class="cherry">樱桃</li>】
   var sel = el.slice(1,2); //<li class="banana">香蕉</li> 【<li class="cherry">樱桃</li>】
```

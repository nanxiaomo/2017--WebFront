# jquery 层级选择选择器
### 层级关系
 在html中有层级关系，比如ul>li 等等，jQuery中可以选择这样层级关系。

 ```xml
      <!--例子代码-->
      <div class="test">
        <ul class="fruit">
          <li class="apple">apple</li>
          <li class="banana">banana</li>
          <li class="cherry">cherry</li>
        </ul>
      </div>
 ```


  + 层级选择器
  选择为空格隔开，层级选择器相比单个的选择器好处在于，它缩小了选择范围，因为首先要定位父节点，才能选择相应的子节点，这样避免了页面其他不相关的元素。
```js
  //选择【<li class="apple">apple</li>】
  var el = $('ul.fruit li.apple');
  // 在css中选择器表示
  ul.fruit li.apple {}
  //中间用空格隔开表示层级关系
```

```js
  //选择所有的li选项 
  var el = $('ul.fruit li');
  var el =$('#test li')//div>li 同样具有层级关系
  // 在css中选择器表示
  ul.fruit li{}
```
 
   + 子选择器（Child Selector）
   子选择器的选择符号>,选择的必须是具有父子关系的元素。也就是具有直属关系。
```js
   //在jQuery中选择【<li class="cherry">cherry</li>】
   var el = $('ul.fruit>li.banana');
   //在css中选择器表示
   ul.fruit>li.banana
```
   + 伪类元素
   
```js
  $('ul.fruit li'); // 选出JavaScript、Python和Lua 3个节点

  $('ul.fruit li:first-child'); // 仅选出JavaScript
  $('ul.fruit li:last-child'); // 仅选出Lua
  $('ul.fruit li:nth-child(2)'); // 选出第N个元素，N从1开始
  $('ul.fruit li:nth-child(even)'); // 选出序号为偶数的元素
  $('ul.fruit li:nth-child(odd)'); // 选出序号为奇数的元素
```
    
### 表单相关元素
```js
    :input：可以选择<input>，<textarea>，<select>和<button>；

    :file：可以选择<input type="file">，和input[type=file]一样；

    :checkbox：可以选择复选框，和input[type=checkbox]一样；

    :radio：可以选择单选框，和input[type=radio]一样；

    :focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；

    :checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，
    如$('input[type=radio]:checked')；

    :enabled：可以选择可以正常输入的<input>、<select>等，也就是没有灰掉的输入；

    :disabled：和:enabled正好相反，选择那些不能输入的。
```
  
### 可见元素
```js
  $('div:visible'); // 所有可见的div
  $('div:hidden'); // 所有隐藏的div
```

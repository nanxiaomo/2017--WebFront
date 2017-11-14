+ 用push()来添加元素，用来代替直接添加元素；
+ 拷贝数组使用
```js
itemCopy = item.slice();
```
+ 使用''包裹字符串；
+ 超过100 字符换行
+ 使用'+' 连接过长的字符串；
+ 字符串到数组，数组到字符串
```js
var st = 'this is string';
var arr = [];
/* st==>arr */ 
arr = st.split('');
/* arr ==> sr */
sr = arr.join('');
```
## 函数
+ 函数表达式
```js
// 匿名函数表达式
var fun = function() {
    return 'this is function';
}
// 命名函数表达式
var fun = function fun() {
    return 'this is function';
}
// 立即调用函数表达式
(function () {
    console.log('this is function')
}());
}
```
+ 不要把参数命名为arguments，因为会代替本来的对象；

### 属性

+ 使用. 来访问对象的属性；
+ 通过变量访问对象属性是，用[];

### 变量

+ 使用var来定义变量，并且最好分开写
+ 最好在作用域最前端书写变量。

### 符号问题

+ 优先使用=== 还有！== ，而不是 == 和！=
+ 使用快捷方式

> + 对象 被计算为 true
> + Undefined 被计算为 false
> + Null 被计算为 false
> + 布尔值 被计算为 布尔的值
> + 数字 如果是 +0、-0 或 NaN 被计算为 false，否则为 true
> + 字符串 如果是空字符串 '' 被计算为 false，否则为 true

### if 和else
```js
if(test){
    do();
}else{
    doanthor();
}
```

### 注释

+ 多行注释，作为多行注释。包含描述、指定所有参数和返回值的类型和值。
```js
/**
 * make() returns a new element 函数名字
 * based on the passed in tag name 作用描述
 *
 * @param {String} tag  参数设置
 * @return {Element} element 返回值类型
 */
 function make(tag) {

  // ...stuff...

  return element;
}
```
+ 使用// 作为单行注释，并且另起一行写
+ 给注释增加 FIXME 或 TODO 的前缀可以帮助其他开发者快速了解这是一个需要复查的问题，或是给需要实现的功能提供一个解决方式。这将有别于常见的注释，因为它们是可操作的。使用 FIXME -- need to figure this out 或者 TODO -- need to implement。

### 空白问题
+ 使用两个空格作为缩进；
+ {}前有一个空格；
+ 在控制语句（if、while 等）的小括号前放一个空格。在函数调用及声明中，不在函数的参数列表前加空格。
```js
if (test) {

}
function test() {

}
```
+ 使用空格把运算符隔开。
+ 行尾插入空格；
+ 长方法链隔开 前面用. ;
+ 在块末和新语句前插入空行。

### 分号

+ 坚持使用分号；

### 类型转换
+ 使用 parseInt 转换数字时总是带上类型转换的基数。
+ 布尔:
```js
// good
var hasAge = Boolean(age);

// good
var hasAge = !!age;
```

### 命名
+ 命名具有描述性；
+ 使用驼峰式命名对象、函数和实例。
+ 使用首字母大写命名构造函数或者类；
+ 
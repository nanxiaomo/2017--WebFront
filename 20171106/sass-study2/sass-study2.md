# sass 一些基本语法

## 使用变量

### 简单说明
sass 为css引入变量形式，可以使css像别的语言一样提前定义变量。

   目前我自己想到的好处：

   1. 在团队合作时，我们可以保持统一，比如按钮颜色，背景色，只需要调用变量名就可以了。
   2. 一些颜色值比较难以记忆书写，利用变量可以方便书写。
   3. 不用重复写一些值，如果有循环规律时，使用变量可以使写法简单。

### 语法规则

 **1. 变量申明** 

使用$来标识变量,赋值与css相同

```scss
   $bg-blue: #5567ff;
```

**2. 作用域**

可以在最前面申明变量，这是在sass文件中变量都可以使用，如果它们出现在任何形式的{...}块中（如@media或者@font-face块）那么变量只可以用在变量中。在外部使用会出错。

```scss
.button-red {
    $bg-red: #FA0000; /* 在{} 内定义变量*/
    background-color: $bg-red;
    color: #fff;
}
```

**3. 变量的使用**

我们定义好变量后最终好的就是使用变量，变量可以用在那些地方：

+ 属性值
定义好变量时，编译后属性值会被代替。
```scss
$button-border:1px solid black;

button{
    border:$button-border;
}
// 编译后css 
button {
  border: 1px solid black; 
}
```
+ 属性名

在属性名中，不可以直接使用变量。使用#{变量名}

```scss
$left: left-color;
button{
    border:$button-border;
    border-#{$left}: #555;
}
// 编译后css 
button {
    border: 1px solid black;
    border-left-color: #555; 
}
```

+ 选择器中使用

选择器和属性名一样，不可以直接使用$变量名。使用#{变量名}

```scss
$select: select;
p.#{$select} {
    color: #228;
}
// 编译后css 
p.select {
  color: #228; 
}
```

**总结**

变量只能作为属性值来用，，我们需要#{}来将变量值转换为字符串，这样就可以用在选择器和属性上

## 本次问题
在scss中加入中文注释会产生问题
[compass sass 中文 错误的问题](http://blog.csdn.net/xiongzhengxiang/article/details/42499857)
目前尝试中文注释还有日文注释都会出现错误。
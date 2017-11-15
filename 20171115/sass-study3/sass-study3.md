# sass 学习第三节
## sass 四种编码风格
sass中提供了四种编码风格，使用方法为：
> sass --style nested style.sass style.css

1. nested：默认的编译风格，特点为：带缩进，并且最后的大括号在上一行；
2. expanded：没有缩进的、扩展的css代码。
3. compact：简洁格式的css代码。
4. compressed：压缩后的css代码。

**注意**
    在自己调试的过程中可以使用expanded 的形式的编译风格，方便查看，而将css放入服务器是建议使用压缩风格，可以加快加载速度。

## 嵌套CSS 规则;

sass一个方便之处就是我们可以使用嵌套的代码风格。这样可以方便书写，加快书写。

### 层级结构

```html
<div id="header">
    <div class="logo"></div>
    <div class="nav"></div>
</div>
```
这样的层级结构在sass中也可以反映

```sass
#header{
    .logo{}
    .nav{}
}
```

### 父选择器的标识符&;

当我们遇到伪类元素或者伪元素时，他是直接作用与父元素，所以需要&来表示作用与父元素

```sass
a{
    color: #111;
    &:hover {
        color: red;
    }
} 
li {
    display: inline-block;
    margin-right: 10px;
    padding: 5px;
    &:last-child{
        margin-right: 0px; 
    } 
}
```

### 群组选择器的嵌套

```sass
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```

### 子组合选择器和同层组合选择器：>、+和~;

可以在嵌套的时候直接使用

###  嵌套属性
```sass
.logo {
    border: {
        width: 1px;
        style: solid;
        color: #666;
    }
}
```

**注意**

这里注意一下写法，在border后面也是要有：号的，要不会编译不出来；
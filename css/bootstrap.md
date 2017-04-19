# bootstrap   源码学习篇
学习重点
+ 响应式布局怎么写
+ 代码书写规范
 
##布局容器
1. container 类用于固定宽度并支持响应式布局的容器。
```
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
/* 其中一个*/
@media (min-width: 576px) {
  .container {
    width: 540px;
    max-width: 100%;
  }
}
```
2. .container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。
```
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
```
## 栅格系统
1. .row row必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）
```
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
```
+ 此处理解flex 布局 学习篇[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
+ 设置display为 flex ，row 为flex 容器
+ flex-wrap: wrap; 内容过多时，换行
+ margin-right: -15px; 为了在container 无缝衔接

2. grid
col
col-\*
col-lg-\*
.col-sm-\*   
.col-md-\*    
.col-xl-\*

## 体会
1. margin padding 等最好还是分开写
2. 
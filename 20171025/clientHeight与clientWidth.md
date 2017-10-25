#学习clientHeight 与clientWidth

## 官方解释
> 返回元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。

>clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算.

## 测试结果

+ [] **不包含滚动条宽度**
    测试结果，clientHeight 还有 clientWidth 都减去了滚动条的17px;
+ [] **包含内边距padding的宽度** 
    结果为可视区域的包含padding
+ [] **ie浏览器**
    在ie中测试结果不改变。
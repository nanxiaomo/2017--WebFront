# sass 学习笔记

之前有接触过，再次学习，理解用法。知道怎么使用。

## 学习资源汇集
+ [**sass中文网**](http://www.sasschina.com/) (目前看英文文档有点费事)
+ [**SASS Tutorial**](https://www.youtube.com/watch?v=wz3kElLbEHE&t=626s)(一个小时简单介绍)
+ [**通用 CSS 笔记、建议与指导***](https://github.com/chadluo/CSS-Guidelines/blob/master/README.md)

##学习笔记

### 安装

+ **安装ruby**
sass是基于ruby 首先安装**ruby**</br>
windows 下安装

>[ruby官网download](https://rubyinstaller.org/downloads/)

+ **安装sass**
安装好ruby 后，就可以安装sass
```
gem install sass  // 安装sass

sass -v           // 可以查看你安装的sass的版本
```

sass 安装成功及版本信息

![sass 安装成功及版本信息](./img/sass1.png)

###传统编写形式

+ 创建一个新的文件 style.sass
    
```sass
    $submit-color : #2FA542
    $warnning-color : #EE1313
    $bgcolor : #E7E7E7

    button 
        width: 100px
        height: 50px

    .submit 
        background-color: $submit-color

    .warning 
        background-color: $warnning-color
```
+ 编译

>    sass stlye.sass style.css

sass 源文件 目标文件
**注意** 在sass不要使用；还有{}，会引起错误，如下图所示

![错误信息](./img/sass2.png)


先标出来，在学习

+ 编译成功的css 文件，加入到项目中

成功画面

![测试画面](./img/sass3.png)

###使用compass

参考资料

>[compass 官网](http://compass-style.org/)</br>
>[Compass用法指南](http://www.ruanyifeng.com/blog/2012/11/compass.html)

Compass是Sass的工具库（toolkit）。

+ **安装compass**

安装好ruby 后，就可以安装compass
```
gem install compass  // 安装compass

compass -v           // 可以查看你安装的compass的版本
```

![compass 安装成功及版本信息](./img/sass4.png)

+ **使用**

安装好compass后就可以使用
```
compass  create *** // 文件名       
```

我建立了第一个compass-css文件作为第一个实验

![sass 安装成功及版本信息](./img/sass5.png)

明天研究compass
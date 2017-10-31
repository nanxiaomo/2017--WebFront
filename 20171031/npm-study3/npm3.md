# npm 学习三
## 发布一个自己编写好的包

### 发布一个洗个新的包
详细见上一次的学习笔记
+ npm init 
    编写package.json
    编写index.js
+ npm adduser
    填写自己的用户信息
+ npm config ls
    查看包的信息
+ npm publish 
    用于发布这个包

### 更新自己的包
+ 更改自己的程序
+ 更改package.json中版本信息
+ npm publish
    重新用于发布
+ **对方更新你的包** npm update 包名

## 语义版本
npm 使用 semver（[语义化版本（Semantic Versioning）规范](http://semver.org/lang/zh-CN/) ）

+ 一般情况下我们用1.0.0开始

    以0.y.z开始用于初始开发阶段，

+ 版本格式：主版本号.次版本号.修订号，版本号递增规则如下：
    
    主版本号：当你做了不兼容的 API 修改，<br>
    次版本号：当你做了向下兼容的功能性新增，<br>
    修订号：当你做了向下兼容的问题修正。<br>
+ 一些别人版本信息

    [定义依赖的版本号
](http://blog.xcatliu.com/2015/04/14/semantic_versioning_and_npm/)

+ npm version patch
    用于更新最后一位，只是更新了api函数中一些bug，或者使其优化
+ npm version minor
    用于更新中间一位，添加了新的功能
+ npm version major
    用于更新第一位，当你做了不兼容的 API 修改。

+ npm publish
    重新发布你的包
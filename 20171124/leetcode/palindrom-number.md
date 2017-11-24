# 总结一下如何判断回文数的几种方法

## 将数字现转化为数字再转化为数组翻转
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString().split("").reverse();
    return str.join("") === x.toString();
};
```

**方法总结**

1. 先将数字x转化为字符串s
2. 将字符串s 转化为 sArr 数组。
3. 将sArr 数组 进行反转。
4. 比较 反转数组和原数组是否相同。

**优点**

+ 写起来方便，理解简单
 
**缺点**

+ 占用空间多

## 数字翻转法
将数字反转判断数字是否和原来的数字相同
```js
var isPalindrome = function(x) {
  var res = 0;
  var xcopy = x;
  while(xcopy!=0){
    res = res*10 + xcopy%10
    xcopy =　Math.floor(xcopy/10);
  }
  return !(x-res);
}
```

**方法**
1.获得数字的反转数
2.比较反转数和数字的是否相等；

##数字位判断方法

```js
var isPalindrome = function(x) {
if (x < 0) return false;  
  let div = 1;  
  while (Math.floor(x / div) >= 10) {  
    div *= 10;  
  }  
  while (x != 0) {  
    let l = Math.floor(x / div);
    let r = x % 10;  
    if (l != r) return false;  
    x = Math.floor((x % div) / 10);  
    div /= 100;  
  }  
  return true;  
}
```
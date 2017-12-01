# 神奇的异或

## 概念
>在逻辑学中，逻辑算符异或（exclusive or）是对两个运算元的一种逻辑析取类型，符号为 XOR 或 EOR 或 ⊕（编程语言中常用^）。但与一般的逻辑或不同，异或算符的值为真仅当两个运算元中恰有一个的值为真，而另外一个的值为非真。转化为命题，就是：“两者的值不同。”或“有且仅有一个为真。”

| x    | y   | x⊕ y|
|:-----:|:-----:|:-----:|
| 1 | 1 | 0 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |

## 异或的特性
1. 恒等率

> 恒等律：X ⊕ 0 = X

2. 归零律

>X ⊕ X = 0

3.交换律

>A ⊕ B = B ⊕ A

4.结合律

>A ⊕ (B ⊕ C) = (A ⊕ B) ⊕ C

## 异或的作用

####  给定一个整数数组，除了一个元素外，每个元素都会出现两次。找到那一个。

```js

var singleNumber = function(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++){
        result ^= nums[i];
    }
    return result;
};
```
**解释**

根据结合律我们知道A ⊕ (B ⊕ C) = (A ⊕ B) ⊕ C;那么出现两次的数字无论在什么位置相见都会消除为0，那么最后就剩下单个的数字和0异或。结果为这个数字本身。

#### 不使用其他空间，交换两个值

```js
a = a ^ b;
b = a ^ b;
a = a ^ b; 
```
**解释**

   + 第一步  a = a ^ b 
   + 第二步  b = a ^ b; b = a(原来的a) ^ b ^ b = a ^ 0 = a;
   + 第三步  a = a ^ b  a = a ^ b ^ a = b;

#### 使用异或来判断一个二进制数中1的数量是奇数还是偶数   
比如 13 的二进制为 1101 ，我们想知道1的奇偶个数
```js
/**
 * @param {num} nums
 * @return {String} "odd" "even"
 */
function getBinaryArr(num){
    return num.toString(2).split("");
}
var parityCount = function(num){
    var numArr = getBinaryArr(num);
    var f = numArr[0]
    for(var i=1;i<numArr.length;i++){
        f ^= numArr[i]
    }
    return f ?  "even":"odd";
}
```

#### 快速求两个二进制数的汉明码

汉明码概念：

10   ： 1 **0** 1 0 <br/>
14   ： 1 **1** 1 0</br>
不同 中间一个不一样，那么汉明距离为1；

```js
    var hammingDistance = function(x, y) {
        var ct = parseInt(x^y,10).toString(2).match(/1/g);
        return (ct)? ct.length:0;
    }
```

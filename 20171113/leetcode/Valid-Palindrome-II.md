#Valid Palindrome II 解题思路整理
## 我自己 的做法；
后来才发现蠢得不要要。
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var sARR = s.split("");
    var resArr = s.split("").reverse();
    var diff = [];
    for (var i = 0; i < sARR.length; i++) {
        if (sARR[i] != resArr[i]) {
            diff.push(i);
            break;
        }
    }
    if (diff.length == 0 ) {
        return true;
    }else {
        resArr.splice(diff[0],1);
        var ss = resArr.slice();
        sARR = resArr.reverse();
       if(ss.toString() === sARR.toString()){
        return true;
       }else {
        return false;
       }
    }
};
```
我到的就是，既然是回文，那么就用它和的相反的序列比较，把不一样的去除掉就可以，感觉就是把题目拿到分析了一下，流水账一般的写了
### 正确的思路
```js
function isValid(s,left, right,count) {
    while ( ++ left <= -- right) 
        if (s.charAt(left) != s.charAt(right)) {
            if (count == 1) return false;
            return isValid(s, left - 1, right, 1) || isValid(s, left, right + 1, 1);
        }
    return true;
}
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
   return isValid(s, -1, s.length, 0);
};
```

这里用的是递归调用，应为这里只可以用删除一个，所以
**count：** 计数；
 
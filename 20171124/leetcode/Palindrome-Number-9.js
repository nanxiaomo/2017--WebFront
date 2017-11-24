/**
 * @param {number} x
 * @return {boolean}
 */
/*var isPalindrome = function(x) {
    var str = x.toString().split("").reverse();
    return str.join("") === x.toString();
};
*/
/*
var isPalindrome = function(x) {
  var res = 0;
  var xcopy = x;
  while(xcopy!=0){
  	res = res*10 + xcopy%10
   	xcopy =　Math.floor(xcopy/10);
  }
  return !(x-res);
}
*/
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
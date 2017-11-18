/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(" ").filter(function(n){return n}).length;
};
// 清除数组中的空元素
/*Array.prototype.clean = function(deleteValue) {  
  for (var i = 0; i < this.length; i++) {  
    if (this[i] == deleteValue) {           
      this.splice(i, 1);//返回指定的元素  
      i--;  
    }  
  }  
  return this;  
};  
arr.filter(function(n){return n}); 
*/

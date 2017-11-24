/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
	if (c == 0) {
		return true;
	}
  var left = 0;
  var right = Math.floor(Math.sqrt(c));
  while(left<right){
  	var cur = left * left + right * right;
  	if (cur < c) {
  		left++;
  	}else if(cur > c){
  		right--;
  	}else{
  		return true;
  	}
  }
  return false;
};
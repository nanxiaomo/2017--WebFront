function isInteger(obj) {
    return obj%1 === 0
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if(n==0){
    return false;
  }
  if (n == 1) {
  	return true;
  }
  else {
  	while (n!=1){
  		if (isInteger(n/3)) {
  			n = n/3;
  		}else {
  			return false;
  		}
  	}
  	return true;
  }
};

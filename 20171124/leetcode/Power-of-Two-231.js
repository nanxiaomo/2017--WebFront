/**
 * @param {number} n
 * @return {boolean}
 */
 function isInteger(obj) {
    return obj%1 === 0
}
var isPowerOfTwo = function(n) {
    if(n==0){
        return false;
    }
    if (n == 1) {
    	return true;
    }
    else {
    	while (n!=1){
    		if (isInteger(n/2)) {
    			n = n/2;
    		}else {
    			return false;
    		}
    	}
    	return true;
    }
};
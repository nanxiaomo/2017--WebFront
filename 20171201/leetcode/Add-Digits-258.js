/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	sum =num
    while(sum){
    	sum = sum%10 + Math.floor(sum/10);
    	if (sum<10&&sum >0) {
    		return sum;
    	}
    }
};
var addDigits = function(num) {
	return 1 + ((num - 1) % 9);
};
function reInt(num) {
	var numArr = [];
	while(num !== 0){
		/*console.log(num%10);*/
		numArr.unshift(num%10);
		num = Math.floor(num/10); 
	}
	var sum = 0;
	numArr.forEach(function(entry){
       sum += Math.pow(entry,2);
	})
	return sum;
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	if(n == 0){
    	return false;
	}
	if(n == 1){
		return true;
	}
	var sum = 0;
	var num = n;
	var set = [];
    while(true){
    	var resultNum = reInt(num);
    	if(resultNum == 1){
    		return true;
    	}
    	else {
    		set.push(num);
    		if(set.indexOf(resultNum) !== -1){
    		   return false;
    		}
    		num = resultNum;
		}
    }
};
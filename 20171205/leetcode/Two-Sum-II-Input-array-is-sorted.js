/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	var result = [];
    if (numbers.length > 1) {
    	for (var i = 0; i < numbers.length; i++) {
    		for (var j = i + 1 ; j < numbers.length; j++) {
    			if (numbers[i]+numbers[j] === target) {
    				result.push(i+1);
    				result.push(j+1);
    				return result;
    			}
    		}
    	}
    	return;
    }else{
    	return;
    }
};
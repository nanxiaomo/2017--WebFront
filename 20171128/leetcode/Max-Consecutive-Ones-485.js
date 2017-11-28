/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var tempmax =0;
    if (nums.length == 1&& nums[0]==1) {return 1;}
    for (var i = 0; i < nums.length; i++) {
    	if(nums[i] == 1){
    		tempmax++;
    	}else{
    		if (max<tempmax) { max = tempmax}
    		tempmax = 0;
    	}
    }
    if (tempmax != 0 && max<tempmax) {max = tempmax}
    return max;
};
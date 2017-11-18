/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	var minnum = nums[0], sum = 0;
	var n = nums.length;
	if (n == 0) {return 1}
    for (var i = 0; i < nums.length; i++) {
    	if (minnum > nums[i]) {
    		minnum = nums[i];
    	}
    	sum += nums[i];
    }
    return minnum +(n*(n+1)/2)-sum;
};
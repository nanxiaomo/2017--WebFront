/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i,missNumber,sum=0;
    var n = nums.length;
    if (n == 1){
    	return 1;
    }
    for (i = 0; i < n; i++) {
    	sum += nums[i]
    }
    return Math.floor(n*(n+1)/2)-sum;
};
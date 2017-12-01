/**
 * @param {number[]} nums
 * @return {number}
 */
/*var singleNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
    	if(nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])) return nums[i];
    }
};*/
var singleNumber = function(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++){
        result ^= nums[i];
    }
    return result;
};
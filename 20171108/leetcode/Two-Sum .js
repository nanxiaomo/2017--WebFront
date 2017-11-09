/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsSize = nums.length;
    var resultArr = [];
    for (var i = 0; i < numsSize; i++) {
		for (var j = i+1; j < numsSize; j++) {
			var sum = nums[i] + nums[j];
			if (sum === target) {
				resultArr.push(i);
				resultArr.push(j);
			}
		}
    }
   	return resultArr;
  
};
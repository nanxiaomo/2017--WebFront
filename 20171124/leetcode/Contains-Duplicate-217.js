/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	if (nums.length == 0 ) {
		return false;
	}else{
		for (var i = 0; i < nums.length; i++) {
    	if(nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])){
    		return true;
    	}
    }
    return false;
	}
};
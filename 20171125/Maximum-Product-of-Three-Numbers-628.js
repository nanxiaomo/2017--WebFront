/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length < 3) return 0;
    nums.sort(function(a,b) {
    	return b-a;
    });
    var sum = 1;
      if (nums[0]==0||nums[1] ==0 || nums[2] ==0) {
      	return 0;
      }
  		if (nums[0]<0) {
  			sum = nums[nums.length -1]*nums[nums.length  -2]*nums[nums.length  -3] ;
  		}
  		if(nums[0]>0&&nums[1] >0 && nums[2] <0 || nums[nums.length - 1] >0){
  			sum = nums[0] * nums[1] * nums[2] ;
  		}	
  		if(nums[0]>0&&nums[1] <0 && nums[2] <0){
  			sum =  nums[0] * nums[nums.length - 1] * nums[nums.length - 2];
  		}
  		
  	return sum;
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var result = [];
  var max = nums[0];
  for(var i = 1;i < nums.length; i++){
    if(nums[i]>max) max = nums[i]; 
  }
  
  var hash = new Array(max+1);
  for (var i = nums.length - 1; i >= 0; i--) {
  	hash[nums[i]] = i;
  };
  var place = 1;
  for (var i = hash.length - 1; i >= 0; i--) {
    if (hash[i] !=undefined) {
      if (place == 1) {
        result[hash[i]] = "Gold Medal";
      } else if (place == 2) {
        result[hash[i]] = "Silver Medal";
      } else if (place == 3) {
        result[hash[i]] = "Bronze Medal";
		  } else {
        result[hash[i]] = placex.toString();
      }
      place++;
    }
  }
  return result.filter(function(x) {
  	return x;
  });
}
var findErrorNums = function(nums) {
    var x, y;
    var sum = 0;
    var n = nums.length;
    var newArr = [nums[0]];
    for (var i = 1; i < n; i++) {
    	if(inArray(nums[i], newArr)){
    		x = nums[i]
    		break;
    	}else {
    		
    		newArr.push(nums[i])
    	}	
    }
     for (var i = 0; i < n; i++) {
    	sum += nums[i]	
    }
    y = Math.abs(n*(n+1)/2+x-sum);
    return [x, y];

};
function inArray(value, array) {
	for (var i = 0; i < array.length; i++) {
		if (value == array[i]) {
			return true;
		}
	}
	return false;
}
/*此处有个知识是在考察等差数列*/
/**
 * @param {string[]} ops
 * @return {number}
 */
 function sumNums(nums) {
 	var sum1 = 0;
 	for (var i = 0; i < nums.length; i++) {
    	sum1 += nums[i];
    }
    return sum1;
 }
var calPoints = function(ops) {
    var nums = [];
    var sum = 0;
    for (var i = 0; i < ops.length; i++) {
    	if(!isNaN(parseInt(ops[i],10))){
    		nums.push(parseInt(ops[i]));
    	}
    	if(ops[i] == "C"){
    		nums.pop();
    	}
    	if(ops[i] == "D"){
    		nums.push(nums[nums.length-1]*2);
    	}
    	if (ops[i] == "+") {
    		if (nums.length == 1) {
    			num.push(nums[0] + sum)
    		}else{
    			nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    		}
		}
    	sum = sumNums(nums);
    }
    return sum;
};
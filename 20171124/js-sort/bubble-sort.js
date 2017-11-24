function bubbleSort(nums) {
	var j = nums.length;
	do{
		for (var i = 0; i < nums.length; i++) {
			if(nums[i]<nums[i+1]){
				var temp = nums[i];
				nums[i] = nums[i+1];
				nums[i+1] = temp;
			}
		}
		j--;
	}while(j>0);
	return nums;
}
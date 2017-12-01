/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
/* 方法一 需要额外的空间
var matrixReshape = function(nums, r, c) {
	var reshapenums = [];
	var temp = [];
	var row = 0,col = 0,i = 0, j = 0;
	if (nums.length == 0) {return [];}
  if (nums.length * nums[0].length == r*c) {
  	for (var i = 0; i < nums.length; i++) {
  		for (var j = 0; j < nums[i].length; j++) {
  			temp.push(nums[i][j]);
  		}
  	}
  	while(row < r){
  		reshapenums.push([])
  		col = 0;
  		while(col < c){
				reshapenums[row].push(temp.shift());
				col++;
  		}
  		row++;
  	}
  	return reshapenums;
  }else{
  	return nums;
  }
};
*/
function getArray(nums,r,c,index) {
	for (var i = 0; i < r; i++) {
		nums.push([])
		for (var j = 0; j < c; j++) {
			nums[i].push(index);
		}
	}
	return nums;
}
var matrixReshape = function(nums, r, c) {
	if((nums.length * nums[0].length) != (r*c))     return nums;
	var reshapenums = [];
	reshapenums = getArray(reshapenums,r,c,0);
	var k = 0, l = 0;
  for(var i=0; i<nums.length; i++) {
    for(var j=0; j<nums[0].length; j++) {
      if( l >= c )  { l = 0;  k++; }
        reshapenums[k][l++] = nums[i][j];
      }
    }
  return reshapenums;
}
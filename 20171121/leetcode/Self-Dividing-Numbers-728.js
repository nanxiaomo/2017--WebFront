/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	var arr =[];
  for (var i = left; i <= right; i++) {
    var j = i;
    for (; j > 0; j = Math.floor(j/10)) {
      if ((j % 10 == 0) || (i % (j % 10) != 0)) break;
    }
    if (j == 0) arr.push(i); 
  }
  return arr;
};
/**
 * @param {string} s
 * @return {number}
 */
 function lettertoNum(l) {
 	return l.charCodeAt() - 'A'.charCodeAt() + 1;
 }
var titleToNumber = function(s) {
    var sArr= s.split("");
    var sum = 0;
    var lnum ;
    for (var i = sArr.length-1,j = 0; i > -1; i--,j++) {
    	lnum = Math.pow(26, j) * lettertoNum(sArr[i]);
    	sum += lnum;
    }
    return sum;
};
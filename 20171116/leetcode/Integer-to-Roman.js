/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var newArr = [];
    var numArr = getNumber(num);
    newArr.push(M[numArr[numArr.length -4]]);
    newArr.push(C[numArr[numArr.length -3]]);
    newArr.push(X[numArr[numArr.length -2]]);
    newArr.push(I[numArr[numArr.length -1]]);
    return newArr.join("");
};
function getNumber(num){
	var numArr = []
	while(num){
		numArr.unshift(num%10);
		num = Math.floor(num/10)
	}
	return numArr;
}
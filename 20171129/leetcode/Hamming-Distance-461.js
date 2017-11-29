/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 function binary(num) {
 	var result = [];
 	while(num){
 		result.unshift(num%2);
 		num = Math.floor(num/2)
 	}
 	return result;
 }
var hammingDistance = function(x, y) {
  var xbinary = binary(x);
  var ybinary = binary(y);
  var hamming = 0;
 	if (xbinary.length > ybinary.length) {
 		return hammingDistance(y,x);
 	}
 	for (var i = 0; i < ybinary.length; i++) {
 		xchar = i < xbinary.length? xbinary[xbinary.length - 1 -i] : 0;
 		ychar = ybinary[ybinary.length - 1 -i];
 		if (xchar == ychar) {
 			hamming++;
 		}
 	}
 	return ybinary.length - hamming;
};

/* 别人好的办法*/
/*var hammingDistance = function(x, y) {
	var ct = parseInt(x^y,10).toString(2).match(/1/g);
	return (ct)? ct.length:0;
};*/
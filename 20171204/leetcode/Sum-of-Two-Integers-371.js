/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  var carry = a & b;
  var result = a ^ b;
  while (carry !== 0){
    var carry_t = carry << 1;
		carry = carry_t & result;
  	result = result ^ carry_t;
  }
  return result;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var stArr = s.split("");
    var newArr = [];
    if(stArr.length < k){
    	return stArr.reverse().join("");
    }
    for (var i = 0; i < stArr.length; i +=2*k) {
    		newArr.push(stArr.slice(i,i+k).reverse().join(""));
    		newArr.push(stArr.slice(i+k,i+2*k).join(""));
    	}
    return newArr.join("");
};
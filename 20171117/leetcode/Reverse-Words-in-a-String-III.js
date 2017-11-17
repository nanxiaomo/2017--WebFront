/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var sArr = s.split(" ").slice();
    for (var i = 0; i < sArr.length; i++) {
    	sArr[i] =sArr[i].split("").reverse().join("");
    }
    return sArr.join(" ");
};
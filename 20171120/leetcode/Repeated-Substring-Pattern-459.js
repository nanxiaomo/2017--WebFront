/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
   return !!s.match("^([a-z]+)\\1+$");
};
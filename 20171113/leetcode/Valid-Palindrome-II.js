
function isValid(s,left, right,count) {
    while ( ++ left <= -- right) 
        if (s.charAt(left) != s.charAt(right)) {
            if (count == 1) return false;
            return isValid(s, left - 1, right, 1) || isValid(s, left, right + 1, 1);
        }
    return true;
}
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
   return isValid(s, -1, s.length, 0);
};
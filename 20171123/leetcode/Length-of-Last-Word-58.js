/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s == ""){
        return 0;
    }
    var sArr = s.split(" ").filter(function(n){return n});
    var LastWord = sArr[sArr.length -1];
    return LastWord.length;
};

/*别人的方法
function lengthOfLastWord(s) {
    s = s.trim();
    return Math.max(0, s.length - s.lastIndexOf(' ') - 1);
};
*/
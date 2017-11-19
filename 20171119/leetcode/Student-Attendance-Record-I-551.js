/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
	if(s.indexOf("A") != s.lastIndexOf("A") || s.search("LLL") != -1)
        return false;
    return true;
};
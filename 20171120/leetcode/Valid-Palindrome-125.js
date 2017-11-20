/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (s == '') {
		return true;
	}else{
		var reg = /[^A-Za-z0-9]+/g;
    	var sr = s.replace(reg,'').toLocaleLowerCase();
    	var stre = sr.split('').reverse().join('');
    	if (sr === stre) {
    		return true;
    	}else {
    		return false;
    	}
	}
};
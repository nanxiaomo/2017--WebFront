/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var comprefix = strs[0];
	if (strs.length == 0 ) return "";
	for (var i = 0; i < strs.length; i++) {
		for (var j = 0; j < comprefix.length; j++) {
			if(comprefix[j] !== strs[i][j]){
				comprefix = strs[i].slice(0,j);
				break;
			}
		}
	}
   return comprefix; 
};
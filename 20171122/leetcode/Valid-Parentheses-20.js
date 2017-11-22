function isMatch(s,s1){
	if(s === "(" && s1 === ")"){
		return true;
	}
	if (s === "{" && s1 === "}") {
		return true;
	}
	if (s === "[" && s1 === "]") {
		return true;
	}
	return false;
}
function isparentheses(s) {
   var parentheses = ["{","}","(",")","[","]"];
   return parentheses.includes(s);
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var item = [];
    var length = 0;
    var sArr = s.split("");
    for (var i = 0; i < sArr.length; i++) {
    	if(isparentheses(sArr[i])){
    		if (isMatch(item[item.length-1],sArr[i])) {
    			item.pop();
   				length++;
    		}else{
    			item.push(sArr[i]);
    			length++;
    		}
    	}
    }
    return !!length && !item.length;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var sArr = s.split("");
  var tArr = t.split("");
  if(tArr.length - sArr.length == 1){
		for (var i = 0; i < tArr.length; i++) {
			if(sArr.indexOf(tArr[i]) !== -1){
				sArr[sArr.indexOf(tArr[i])] = "";
				tArr[i] = "";
			}
		}
		return tArr.join("");
	}else{
		return "\u0006";
	}
};
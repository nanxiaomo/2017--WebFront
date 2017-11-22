/**
 * @param {string} s
 * @return {string}
 */
function isVowels(word){
	var vowels = ["a","o","e","i","u","A","O","E","I","U"];
	return vowels.includes(word);
}
var reverseVowels = function(s) {

  var sArr = s.split("");
  if (s == null || sArr.length == 0) { return s}
  var end = sArr.length-1;
  var start = 0
  
  while(start < end){
  	while(start < end && !isVowels(sArr[start])) {
  		start++;
		}
		while (start < end && !isVowels(sArr[end])) {
			end--;
		}
   var temp = sArr[start];
   sArr[start] = sArr[end];
   sArr[end] = temp;
   start++;
   end--;
  }
  return sArr.join("");
};
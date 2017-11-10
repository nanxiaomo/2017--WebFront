function getNextSting(stringPre){
	var size = stringPre.length;
	var NextStringArr = [];
	var count = 1;
	for (var i = 0; i < size; i++) {
	    if (stringPre.charAt(i)==stringPre.charAt(i+1)){
	    	count++;
	    }else{
			NextStringArr.push(count);
			NextStringArr.push(stringPre.charAt(i));
			count = 1;
		}
	}
	return NextStringArr.join("");

}
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==0 ||n==1){
    	return "1"
    }
    var strat = "1";
    for (var i = 1; i < n; i++) {
    	strat = getNextSting(strat);

    }
    return strat;
};
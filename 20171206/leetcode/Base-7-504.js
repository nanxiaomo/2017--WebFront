/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0) return "0";
    var negative = false;
    if(num < 0) {
        num = num * -1;
        negative = true;
    }
    var res = [];
	while(num != 0){
	    res.unshift(num%7);
	    num = Math.floor(num/7);
	    
	}
    if(negative) res.unshift("-")

     return res.join("");
}
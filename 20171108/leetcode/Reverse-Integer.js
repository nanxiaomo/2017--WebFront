/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numStr = String(x);
    var resultStr = "";
    if(numStr[0] == "-"){
    	resultStr = resultStr.concat("-",numStr.slice(1).split("").reverse().join(""));
    }else{
    	resultStr = numStr.split("").reverse().join("");
    }
    var num = parseInt(resultStr,10);
    if ( Math.abs(x) < 2147483648 &&  Math.abs(num) < 2147483648){
       return num;
    }else {
    	return 0;
    }
};
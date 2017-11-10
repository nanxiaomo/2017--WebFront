function getserflag(num) {
	return Math.floor(num /10);
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	var size,sum,flag = 0;
	var newStr = [];
	if (num1.length -num2 .length > 0) {
		size = num1.length;
  	} else {
  		size = num2.length;
  	} 
  	for (var i = 1; i <= size+1; i++) {
  		sum = parseInt(num1.charAt(num1.length -i)- '0')+parseInt(num2.charAt(num2.length -i)- '0');
  		var sumAll = sum%10+flag;
  		if (sumAll== 10) {
  			newStr.unshift(0);
  		}else{
  			newStr.unshift(sumAll);
  		}
  		flag = getserflag(sum+flag);
  	}
  	if(newStr[0] == 0) {
  		newStr = newStr.splice(1);
  	}
  	return newStr.join("");

};
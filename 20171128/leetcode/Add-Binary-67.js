/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/* 
十位数数字方法
function transBinary(num) {
 	var strArr = [];
 	if (num == 0) { return "0";}
 	while(num){	
 		strArr.unshift(num%2);
 		num = Math.floor(num/2);
 	}
 	return strArr.join("");
 }
var addBinary = function(a, b) {
    var sum = parseInt(a,2) + parseInt(b,2);
    return transBinary(sum);
}; */
var addBinary = function(a, b) {
	if(a == "" ) return b;
	if(b == "") return a;
	if(a.length > b.length) return addBinary(b,a);
	var strArr = [];
	var carry = "0";
	for(var i = 0; i < b.length; i++){
		var aChar = i < a.length ? a.charAt(a.length-1-i) : '0';
		var bChar = b.charAt(b.length-1-i);
		var curr;
		if(aChar != bChar){
		  curr = carry == '1'? '0' :'1';
		}else{
		  curr = carry;
		  carry = aChar;
		}
		strArr.unshift(curr);
	}
	if(carry == '1') strArr.unshift(carry);
	  return strArr.join("");
}
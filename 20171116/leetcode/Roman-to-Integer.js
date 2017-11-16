function ramanMap(s) {
	switch(s){
		case"I":{
			return 1;
			break;
		}
		case"V":{
			return 5;
			break;
		}
		case"X":{
			return 10;
			break;
		}
		case"L":{
			return 50;
			break;
		}
		case"C":{
			return 100;
			break;
		}
		case"D":{
			return 500;
			break;
		}
		case"M":{
			return 1000;
			break;
		}
	}
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var numARR = [];
    var sum;
    for (var i = 0; i < s.length; i++) {
    	numARR.push(ramanMap(s.charAt(i)));
    }
    numARR.push(numARR[numARR.length-1]);
    numARR.unshift(numARR[0]);
    sum = 0;
    for (var i = 1; i < numARR.length-1;) {
    	if (numARR[i-1] >= numARR[i]&& numARR[i] >= numARR[i+1] ){
    		sum += numARR[i];
    		i++;
    	}
    	if (numARR[i-1] >= numARR[i]&& numARR[i] < numARR[i+1] ){
    		sum += (numARR[i+1]-numARR[i]);
    		i += 2;
    	}
    }
    return sum;
};
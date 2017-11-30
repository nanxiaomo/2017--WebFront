/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	var result = []
	if (n == 1) { return ["1"]}
    for (var i = 1; i <= n; i++) {
    	if (i%5 == 0 && i%3 == 0) {
    		result.push("FizzBuzz");
    		continue;
    	}
    	if (i%3 == 0) {
    		result.push("Fizz");
    		continue;
    	}
    	if (i%5 == 0) {
    		result.push("Buzz");
    		continue;
    	}
        if (i > 0) {
    		result.push(i.toString());
    	}	
    }
    return result;
};
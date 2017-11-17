function Stack() {
	var item = [];

	this.push = function(num) {
		return item.push(num);
	};
    
    this.pop = function() {
    	return item.pop();
    }

    this.peek = function() {
    	return item[item.length -1];	
    }

    this.isEmpty = function() {
    	return item.length == 0;
    }

    this.size = function() {
    	return item.length;
    }

    this.print = function() {
    	console.log(item.toString());
    }

    this.clear = function() {
    	item = [];
    }

}
// 注意不要给item写this；
var stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(10);

function baseConverter(decNumber,base) {
	var remStack = new Stack();
	var rem;
	var baseString = [];
	var digits = '0123456789ABCDEF';
	while(decNumber){
		rem = decNumber % base;
		remStack.push(rem);
		decNumber = Math.floor(decNumber/base);
	}
	while(!remStack.isEmpty()) {
		baseString.push(digits[remStack.pop()]);
	}
	return baseString.join("");
}

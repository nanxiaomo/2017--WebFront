/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
	var i = 1; 
	var t = A;
	if(A.match(B)) return i;
    while(true){
    	t = t.concat(A);
    	if(t.match(B)){
    		return ++i;
    	}else if(t.length > B.length){
    		return -1;
    	}else{
    		i++;
    	}	
    }
};
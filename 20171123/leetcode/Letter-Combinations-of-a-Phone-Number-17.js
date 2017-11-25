var phoneMap = [
	[],
	[],
	['a', 'b','c'],
	['d', 'e', 'f'],
	['g', 'h','i'],
	['j', 'k','l'],
	['m','n','o'],
	['p','q','r','s'],
	['t','u','v'],
	['w','x','y','z']
];
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if(digits.length === 0)
        return [];
        
    if(digits.length === 1)
        return phoneMap[parseInt(digits)];
        
    var workingIndex = 1;
    var temp =phoneMap[parseInt(digits[0])];
    var ret = phoneMap[parseInt(digits[0])];
    var workingArray;
    do{
        
        workingArray = phoneMap[parseInt(digits[workingIndex])];
        temp = ret;
        ret = [];
        
        for(var i = 0; i < temp.length; i++){// ret =  ret * the third pair 
            for(var j = 0; j < workingArray.length; j++){
                ret.push(temp[i] + workingArray[j]);
            }
        }
        
        workingIndex++;
    }while(workingIndex < digits.length);
    
    return ret;
};
	


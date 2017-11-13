/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var  allUpregex = new RegExp(/^[A-Z]+$/, "g");
    var  firstUpregex = new RegExp(/^[A-Z]?[a-z]+$/,"g");
    if(allUpregex.test(word)||firstUpregex.test(word)){
    	return true;
    }
    else{
    	return false;
    }
};
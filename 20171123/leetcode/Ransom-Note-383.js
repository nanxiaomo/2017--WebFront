/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
    	return false;
    }
    else{
    	var i = 0;
    	while(i<ransomNote.length) {
    		if(magazine.indexOf(ransomNote[i]) == -1){
    			return false;
    		}else {
    			magazine = magazine.substr(0,magazine.indexOf(ransomNote[i])) +  magazine.substr(magazine.indexOf(ransomNote[i]) + 1, magazine.length);
    			i++;
    		}
    	}
    }
    if (ransomNote.length == 0&&magazine.length == 0) {
    	return true;
    }else{
    	return !!magazine.length;
    }
};
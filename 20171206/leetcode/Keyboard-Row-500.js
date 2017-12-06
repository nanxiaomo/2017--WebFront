function twocol(letter) {
	var letter1 = ["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P"];
	var letter2= ["a","s","d","f","g","h","j","k","l","A","S","D","F","G","H","J","K","L"];
	var letter3= ["z","x","c","v","b","n","m","Z","X","C","V","B","N","M"];
	if (letter1.indexOf(letter)!== -1){
		return 1;
	}
	if (letter2.indexOf(letter)!== -1){
		return 2;
	}
	if(letter3.indexOf(letter)!== -1){
		return 3;
	}
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	var result = [];
	var flag = 1;
 	for (var i = 0; i < words.length; i++) {
 		var flag = 1;
 		for (var j = 0; j < words[i].length; j++) {
 		 	if (twocol(words[i][j]) !== twocol(words[i][0])) {
 		 		flag = 0;
 		 		break;
 		 	}
 		}
 		if(flag){
 		 	result.push(words[i]);
 		}
 	}
 	return result;
};
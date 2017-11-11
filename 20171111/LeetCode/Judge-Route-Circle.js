var Map = function (charin) {
	switch(charin){
		case "U":{
			return 1;
		}
		case "D":{
			return -1;
		}
		case "L":{
			return 100;
		}
		case "R":{
			return -100;
		}
		default:{
			return 999;
		}
	}
}
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var stringArr = moves.split("");
    var n = stringArr.length;
    var sum = 0
    for (var i = 0; i < n; i++) {
    	sum += Map(stringArr[i]);
    }
    if (sum ==0) {
    	return true;
    }else {
    	return false;
    }
};
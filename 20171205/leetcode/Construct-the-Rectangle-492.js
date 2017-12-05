/**
 * @param {number} area
 * @return {number[]}
 */
/*我自己的方法，超时
var constructRectangle = function(area) {
	var sqr = Math.floor(Math.pow(area,0.5));
	var result = []
	for (var i = sqr; i >= 0; i--) {
		for (var j = sqr; j <= area; j++) {
			if (i*j === area) {
				result.push(j);
				result.push(i);
				return result;
			}
		}
	}
};*/
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var result = [0,0];
    if(area == 0){
        return result;
    }
    var sqr = Math.floor(Math.pow(area,0.5));
    while(area%sqr != 0){
        sqr--;
    }
    var b = area/sqr;
    result[0] = b;
    result[1] = sqr;
    return result;
};
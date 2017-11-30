/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var kinds = [];
    for (var i = 0; i < candies.length; i++) {
		if (kinds.indexOf(candies[i]) === -1 ) {
			kinds.push(candies[i]);
		}
	}
	kind = kinds.length > candies.length/2 ? Math.floor(candies.length/2) : kinds.length;
	return kind;
};
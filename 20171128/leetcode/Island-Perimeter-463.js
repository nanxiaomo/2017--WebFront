/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	var range = 0;
	var col = [];
	for (var i = 0; i < grid[0].length; i++) {
		col.push(0);
	}
	grid.push(col);
	grid.unshift(col);
	for (var c = 0; c < grid.length-1; c++) {
		grid[c].push(0);
		grid[c].unshift(0);
	}
    for (var i = 1; i < grid.length; i++) {
    	for (var j = 1; j < grid[i].length; j++) {
    		if (grid[i][j] == 1) {
    			if(grid[i][j-1] !== 1){
    				range++;
    			}
    			if(grid[i][j+1] !== 1){
    				range++;
    			}
    			if(grid[i+1][j] !== 1){
    				range++;
    			}
    			if(grid[i-1][j] !== 1){
    				range++;
    			}
    		}
    	}
    }
    return range;
};
var maxCount = function(m, n, ops) {
    let minRow = m;
    let minCol = n;
    
    // find overlap of the operators
    for (const op of ops) {
        minRow = Math.min(minRow, op[0]);
        minCol = Math.min(minCol, op[1]);
    }
    
    return minRow * minCol;
};
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    var minRow = m;
    var minCol = n;

    for (var i = 0; i < ops.length; i++) {
    	minRow = Math.min(minRow, ops[0]);
        minCol = Math.min(minCol, ops[1]);
    }
    return minRow * minCol;
};
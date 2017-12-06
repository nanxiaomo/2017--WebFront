/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    let stk = [];
    let map = new Map();
    nums.forEach((n, i) => {
        while (_.size(stk) !== 0 && _.last(stk) < n) {
            map.set(stk.pop(), n);
        }
        stk.push(n);
    });
    
    let res = [];
    findNums.forEach((n, i) => {
        if (map.has(n)) {
            res.push(map.get(n));
        } else {
            res.push(-1);
        }
    });
    
    return res;
};
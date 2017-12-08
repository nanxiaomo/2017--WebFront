/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var buy = prices[0]||0;
    var profit = 0;
    for(var i = 1; i < prices.length; i++){
        if(prices[i] < buy){
            buy = prices[i];
        }
        profit = Math.max(profit, prices[i] - buy);
    }
    return profit;
};
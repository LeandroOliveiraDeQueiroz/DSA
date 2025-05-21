/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2)   return 0;

    let result  = 0;
    let smaller = prices[0];

    for(let i = 1; i < prices.length; i++) {
        const price = prices[i];

        result = Math.max(result, price - smaller);
        smaller = Math.min(smaller, price);
    }

    return result;
};
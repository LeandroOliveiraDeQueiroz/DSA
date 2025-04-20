/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const min_coins = new Array(amount + 1).fill(amount + 1);
    min_coins[0] = 0;

    for(let actualAmount = 1; actualAmount <= amount; actualAmount++) {
        for(const coin of coins) {
            if(actualAmount - coin >= 0)
                min_coins[actualAmount] = Math.min(min_coins[actualAmount], 1 + min_coins[actualAmount - coin]);
        }
    }

    return min_coins[amount] <= amount ? min_coins[amount] : -1;
};
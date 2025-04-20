/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const array = new Array(amount + 1);
    array[0] = 0;

    // for(const coin of coins) {
    //     if(coin <= amount)
    //         array[coin] = 1
    // }

    for(let i = 1; i <= amount; i++) {
        let min = amount + 1; //default value

        for(const coin of coins) {
            if(i - coin >= 0) {
                min = Math.min(min, array[i-coin] + 1);
            }
        }

        array[i] = min;
    }

    console.log('array:', array)

    return array[amount] <= amount ? array[amount] : -1;
};
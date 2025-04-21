/*

    recurive(i = n, target)
       if(i < 0)
        return 0

    if(target  === 0)
        result 1


    
    return recursivet(i+1, target - nums[i]) + 
    2^n

    I can resolve the problem of 4 be know the problem of 3 and so on

    Just have one option to 1
    have to options to 2: 2 and 1 + 1

    How can I find 3?

    Which number is smaller than 3 //Need test all
    1 and 2 and 3

    Removing 1 -> solution = s(2) = 2
    removing 2 -> s(1) = 1;
    removing 3 -> s(0) = 1

    4 ways

    target 4
        remove 1 -> s(3) = 4
        remove 2 -> s(2) = 2
        remove 3 -> s(1) = 1

    7

    dp matrix nums + 1 && target + 1

    first row and column start with 1
    the rest start with 0

    for(i amounts)
        ways = 0
        for(j nums)
            way += way[i -j] 



*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target+1);
    dp[0] = 1;

    for(let i = 1; i <= target; i++) {
        let result = 0;
        for(const num of nums) {
            if(num <= i)
                result += dp[i-num];
        }

        dp[i] = result;
    }


    return dp[target];
};
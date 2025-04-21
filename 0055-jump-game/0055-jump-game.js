/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /* 

 */
var canJump = function(nums) {
    const dp = new Array(nums.length).fill(false);
    dp[nums.length-1] = true;

    for(let i = nums.length -2; i >= 0 ; i--) {
        const num = nums[i];    

        dp[i] = isTrue(dp, i, Math.min(i + num, nums.length -1))
    }

    console.log(dp);

    return dp[0];
};

const isTrue = (array, start, end) => {

    for(let i = start; i <= end; i++) {
        if(array[i])
            return true;
    }


    return false;
} 

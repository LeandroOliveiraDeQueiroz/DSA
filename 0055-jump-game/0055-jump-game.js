/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /* 

 */
var canJump = function(nums) {
    let m = 0, i = 0;
    if(nums.length === 1) return true;

    while(i <= m) {
        m = Math.max(m, i + nums[i]);
        i++;
        if(m >= nums.length -1) return true;
    }

    return false;
};


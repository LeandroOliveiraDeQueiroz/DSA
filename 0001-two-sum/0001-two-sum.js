/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(map.has(num))
            return [i, map.get(num)]

        map.set(target - num, i)
    }

    return []
};
/*
    rob first - don't rob

    3 2 1 3 1

    3 + 1 + 1 = 5
    2 + 3 = 5
    3 + 3 = 6

    recusivity function make a sum of rob this house or no

    r(index, prevRoubed = false)

        //check prev house
        return Math.max(v[index] + r(i+1, true),  r(i+1, false))

    2^n
    n

    rob  = value + dont[i-1]
    dont[i] = max(dont[i-1], rob[i-1] )

         0, 0, 2, 7, 9,  3, 1
    rob  0  0  2  7  11  10 12
    dont 0  0  0  2  7   

     0 3 2 1 3 1
     0 3 2 4 6
     0 0 3 3 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const take = new Array(nums+1);
    const dontTake = new Array(nums +1);
    take[0] = 0;
    dontTake[0] = 0;

    for(let i = 1; i <= nums.length; i++) {
        const num = nums[i-1];

        take[i] = num + dontTake[i-1];
        dontTake[i] = Math.max(dontTake[i-1], take[i-1]);
    }

    // console.log('take', take)
    // console.log('dont', dontTake)

    return Math.max(take[nums.length], dontTake[nums.length])

};
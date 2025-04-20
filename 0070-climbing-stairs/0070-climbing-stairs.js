/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memory = Array(n + 1);
    memory[0] = 0;
    memory[1] = 1; 
    memory[2] = 2;

    for(let i = 3; i < memory.length; i++) {
        memory[i] = memory[i - 1] + memory[i - 2];
    }

    return memory[n];
};
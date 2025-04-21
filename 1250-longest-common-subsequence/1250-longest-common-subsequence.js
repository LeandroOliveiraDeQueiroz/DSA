/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/*   0 a b c d c
   0 0 0 0 0 0 0
   a 0 1 0 0 0 0 
   b 0 0 2 0 0 0  
   c 0 0 0 3 0 1

   globalMax to have the result

     0 a b t d a
   0 0 0 0 0 0 0
   a 0 1 1 1 1 1 
   a 0 1 1 1 1 2  
   c 0 0 1 1 1 1

    i j
   max( dp[i][j-1], (1||0) + dp[i-1][j-1]) 
   global max

   t1*t2
   t1*t2

*/

var longestCommonSubsequence = function(text1, text2) {
    // const dp = new Array(text1.length +1).fill().map(() => new Array(text2.length+1).fill(0));
    let lastRow = new Array(text2.length +1).fill(0);
    let actualRow = new Array(text2.length +1).fill(0);

    let max = 0;
    // console.log('dp', dp)

    for(let i = 1; i <= text1.length; i++) {
        let previous = 0;

        for(let j = 1; j <= text2.length; j++) {
            // console.log('text1[i-1]', text1[i-1])
            // console.log('text2[j-1]', text2[j-1])
            const isEqual = text1[i-1] === text2[j-1];
            const value = isEqual ? 1 : 0;
            // dp[i][j] = Math.max(dp[i][j-1],  value +  dp[i-1][j-1], dp[i-1][j] ); // lest 
            actualRow[j] = Math.max(previous, value + lastRow[j-1], lastRow[j]);
            // console.log('dp[i][j]', dp[i])
            max = Math.max(max, actualRow[j]);
            previous = actualRow[j];
        }

        lastRow = actualRow;
        actualRow = new Array(text2.length +1).fill(0);

        // console.log('dp', dp)
    }


    return max;
};
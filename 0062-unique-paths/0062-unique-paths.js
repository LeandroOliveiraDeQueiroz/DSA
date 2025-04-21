/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
    row, column



*/

var uniquePaths = function(m, n) {
    const dp = new Array(m).fill().map(() => new Array(n).fill(-1));
    // console.log(dp)
    dp[m-1][n-1] = 1;
    
    function getPath(i, j) {
        if(i >= m || j >= n)
            return 0;

        if(dp[i][j] !== -1)
            return dp[i][j]

        dp[i][j] = getPath(i+1,j) + getPath(i, j+1);

        return dp[i][j];

    }
    
    return    getPath(0, 0);

};
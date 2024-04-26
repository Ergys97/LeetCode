/**
 * @param {number[][]} grid
 * @return {number}
 */
function minFallingPathSum(grid) {
    let n = grid.length;
    let dp = Array.from({length: n}, () => Array(n).fill(Infinity));
    dp[0] = [...grid[0]];
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (j !== k) {
                    dp[i][j] = Math.min(dp[i][j], dp[i-1][k] + grid[i][j]);
                }
            }
        }
    }
    return Math.min(...dp[n-1]);
}
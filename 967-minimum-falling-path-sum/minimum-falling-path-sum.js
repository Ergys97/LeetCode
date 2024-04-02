/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let n = matrix.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));
    dp[0] = matrix[0];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = matrix[i][j] + Math.min(...dp[i - 1].slice(Math.max(0, j - 1), Math.min(n, j + 2)));
        }
    }

    return Math.min(...dp[n - 1]);
};
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    let mod = Math.pow(10, 9) + 7;
    let dp = new Array(n + 1).fill(0).map(() => new Array(2).fill(0).map(() => new Array(3).fill(0)));

    dp[0][0][0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 3; k++) {
                dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % mod;
            }
        }
        for (let k = 0; k < 3; k++) {
            dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][k]) % mod;
        }
        for (let j = 0; j < 2; j++) {
            for (let k = 1; k < 3; k++) {
                dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % mod;
            }
        }
    }

    let res = 0;
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 3; k++) {
            res = (res + dp[n][j][k]) % mod;
        }
    }
    return res;
};
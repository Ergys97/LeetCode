/**
 * @param {number[][]} hats
 * @return {number}
 */
function numberWays(hats) {
    let n = hats.length;
    let dp = Array.from({length: 41}, () => Array(1 << n).fill(0));
    let hatToPeople = Array.from({length: 41}, () => []);
    let mod = 1e9 + 7;
    dp[0][0] = 1;
    for (let i = 0; i < n; i++) {
        for (let hat of hats[i]) {
            hatToPeople[hat].push(i);
        }
    }
    for (let i = 1; i <= 40; i++) {
        for (let j = 0; j < (1 << n); j++) {
            dp[i][j] = dp[i - 1][j];
            for (let person of hatToPeople[i]) {
                if ((j & (1 << person)) > 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j ^ (1 << person)]) % mod;
                }
            }
        }
    }
    return dp[40][(1 << n) - 1];
}
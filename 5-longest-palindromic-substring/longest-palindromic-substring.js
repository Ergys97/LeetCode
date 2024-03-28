/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array(n).fill(false).map(() => Array(n).fill(false));
    let start = 0, maxLength = 1;

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = true;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLength) {
                    start = i;
                    maxLength = j - i + 1;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
};
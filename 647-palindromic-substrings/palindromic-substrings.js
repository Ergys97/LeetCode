/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (s == null || s.length === 0) {
        return 0;
    }

    let n = s.length;
    let dp = Array(n).fill(false).map(() => Array(n).fill(false));
    let count = 0;

    for (let i = 0; i < n; i++, count++) {
        dp[i][i] = true;
    }

    for (let start = n - 1; start >= 0; start--) {
        for (let end = start + 1; end < n; end++) {
            if (s[start] == s[end]) {
                if (end - start == 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true;
                    count++;
                }
            }
        }
    }

    return count;
};
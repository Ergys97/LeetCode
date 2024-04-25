/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestIdealString(s, k) {
    let dp = Array(26).fill(0);
    for (let c of s) {
        let max = 0;
        let start = Math.max(0, c.charCodeAt() - 'a'.charCodeAt() - k);
        let end = Math.min(26, c.charCodeAt() - 'a'.charCodeAt() + k + 1);
        for (let i = start; i < end; i++) {
            max = Math.max(max, dp[i]);
        }
        dp[c.charCodeAt() - 'a'.charCodeAt()] = max + 1;
    }
    return Math.max(...dp);
}
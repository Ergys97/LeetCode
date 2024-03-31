/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    let count = 0;
    const isPalindrome = (start, end) => {
        while (start < end) {
            if (s[start++] !== s[end--]) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (isPalindrome(i, j)) {
                count++;
            }
        }
    }

    return count;
};
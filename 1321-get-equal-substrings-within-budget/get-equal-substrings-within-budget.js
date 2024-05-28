/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let start = 0, end = 0, totalCost = 0, maxLength = 0;
    while (end < s.length) {
        totalCost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end));
        while (totalCost > maxCost) {
            totalCost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }
    return maxLength;
};
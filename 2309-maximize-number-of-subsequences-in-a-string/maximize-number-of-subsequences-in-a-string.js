/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
    let firstCharCount = 0;
    let secondCharCount = 0;
    let result = 0;

    for (let char of text) {
        if (char === pattern[0]) {
            firstCharCount++;
        } else if (char === pattern[1]) {
            secondCharCount++;
            result += firstCharCount;
        }
    }

    if (pattern[0] === pattern[1]) {
        return firstCharCount * (firstCharCount + 1) / 2;
    }

    return result + Math.max(firstCharCount, secondCharCount);
};
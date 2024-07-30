/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let score = 0;
    let maxLength = 0;
    const scoreIndexMap = new Map();

    for (let i = 0; i < hours.length; i++) {
        score += (hours[i] > 8) ? 1 : -1;

        if (score > 0) {
            maxLength = i + 1;
        } else {
            if (!scoreIndexMap.has(score)) {
                scoreIndexMap.set(score, i);
            }
            if (scoreIndexMap.has(score - 1)) {
                maxLength = Math.max(maxLength, i - scoreIndexMap.get(score - 1));
            }
        }
    }

    return maxLength;
};
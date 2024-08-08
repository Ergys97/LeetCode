/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const frequencyMap = new Map();

    for (const str of arr) {
        frequencyMap.set(str, (frequencyMap.get(str) || 0) + 1);
    }

    const distinctStrings = [];
    for (const str of arr) {
        if (frequencyMap.get(str) === 1) {
            distinctStrings.push(str);
        }
    }

    return distinctStrings.length >= k ? distinctStrings[k - 1] : "";
};
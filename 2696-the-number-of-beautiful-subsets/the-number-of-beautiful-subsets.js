/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let count = 0;

    function isBeautiful(subset) {
        const len = subset.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (Math.abs(subset[i] - subset[j]) === k) {
                    return false;
                }
            }
        }
        return true;
    }

    function backtrack(start, subset) {
        if (subset.length > 0 && isBeautiful(subset)) {
            count++;
        }
        for (let i = start; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(i + 1, subset);
            subset.pop();
        }
    }

    backtrack(0, []);
    return count;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let numSet = new Set(nums);
    let maxK = -1;

    for (let num of nums) {
        if (num > 0 && numSet.has(-num)) {
            maxK = Math.max(maxK, num);
        }
    }

    return maxK;
};
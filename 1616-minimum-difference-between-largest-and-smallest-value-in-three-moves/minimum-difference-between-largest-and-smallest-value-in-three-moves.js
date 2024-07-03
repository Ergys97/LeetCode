/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) return 0;

    nums.sort((a, b) => a - b);
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 4; i++) {
        minDiff = Math.min(minDiff, nums[nums.length - 4 + i] - nums[i]);
    }
    return minDiff;
};
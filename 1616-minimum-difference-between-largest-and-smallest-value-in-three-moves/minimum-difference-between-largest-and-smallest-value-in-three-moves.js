/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) {
        return 0;
    } else {
        nums.sort((a, b) => a - b);
        let minDiff = Infinity;
        for (let i = 0; i < 4; i++) {
            minDiff = Math.min(minDiff, nums[nums.length - 1 - i] - nums[3 - i]);
        }
        return minDiff;
    }
};
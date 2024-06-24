/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    let flip = 0, result = 0;
    const flipped = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (i >= k) flip ^= flipped[i - k];
        if (nums[i] === flip) {
            if (i + k > nums.length) return -1;
            flipped[i] = 1;
            flip ^= 1;
            result++;
        }
    }

    return result;
};
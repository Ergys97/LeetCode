/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let freqMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);

        while (freqMap.get(nums[right]) > k) {
            freqMap.set(nums[left], freqMap.get(nums[left]) - 1);
            if (freqMap.get(nums[left]) === 0) {
                freqMap.delete(nums[left]);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
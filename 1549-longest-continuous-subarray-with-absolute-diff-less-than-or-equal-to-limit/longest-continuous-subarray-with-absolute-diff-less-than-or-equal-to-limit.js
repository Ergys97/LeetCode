/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let start = 0, end = 0;
    let maxDeque = [], minDeque = [];
    let maxLength = 0;

    while (end < nums.length) {
        // Maintain decreasing deque for max value
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] < nums[end]) {
            maxDeque.pop();
        }
        maxDeque.push(end);

        // Maintain increasing deque for min value
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] > nums[end]) {
            minDeque.pop();
        }
        minDeque.push(end);

        // If current window's max-min > limit, shrink from left
        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            if (maxDeque[0] === start) maxDeque.shift();
            if (minDeque[0] === start) minDeque.shift();
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }

    return maxLength;
};
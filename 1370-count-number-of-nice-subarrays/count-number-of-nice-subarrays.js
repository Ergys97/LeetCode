/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    function atMostK(k) {
        let count = 0;
        let result = 0;
        let start = 0;
        for (let end = 0; end < nums.length; end++) {
            if (nums[end] % 2 !== 0) k--;
            while (k < 0) {
                if (nums[start] % 2 !== 0) k++;
                start++;
            }
            result += end - start + 1;
        }
        return result;
    }
    return atMostK(k) - atMostK(k - 1);
};
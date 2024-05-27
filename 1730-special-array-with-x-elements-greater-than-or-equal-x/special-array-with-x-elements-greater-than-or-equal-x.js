/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let freq = new Array(1001).fill(0);
    for (let num of nums) {
        freq[num]++;
    }
    for (let i = freq.length - 1, sum = 0; i >= 0; i--) {
        sum += freq[i];
        if (sum === i) {
            return i;
        }
    }
    return -1;
};
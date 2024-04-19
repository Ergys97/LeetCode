/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = new Array(101).fill(0);
    let pairs = 0;
    for (let num of nums) {
        pairs += count[num]++;
    }
    return pairs;
};
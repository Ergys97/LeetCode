/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positives = nums.filter(num => num > 0);
    let negatives = nums.filter(num => num < 0);
    let result = [];

    for (let i = 0; i < positives.length; i++) {
        result.push(positives[i]);
        result.push(negatives[i]);
    }

    return result;
};
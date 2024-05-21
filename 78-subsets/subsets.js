/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];

    for (let num of nums) {
        let newSubsets = [];
        for (let curr of result) {
            newSubsets.push([...curr, num]);
        }
        result.push(...newSubsets);
    }

    return result;
};
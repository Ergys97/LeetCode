/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let a = nums[0];
    let b = nums[0];

    do {
        a = nums[a];
        b = nums[nums[b]];
    } while (a != b);

    a = nums[0];
    while (a != b) {
        a = nums[a];
        b = nums[b];
    }

    return b;
};
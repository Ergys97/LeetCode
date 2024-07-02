/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    nums1.forEach(num => {
        if (map[num] === undefined) map[num] = 0;
        map[num]++;
    });
    const result = [];
    nums2.forEach(num => {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    });

    return result;
};
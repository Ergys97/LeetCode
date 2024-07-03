/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length <= 4) return 0;

    nums.sort((a,b) => a-b);
    console.log(nums)
    let n = nums.length;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<4; i++){
        min = Math.min(min, nums[n-4+i] - nums[i]);
    }
    return min;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
   const count = new Array(k).fill(0);
    count[0] = 1;
    let sum = 0;
    let answer = 0;
    for (let num of nums) {
        sum = ((sum + num % k) + k) % k;
        answer += count[sum]++;
    }
    return answer; 
};
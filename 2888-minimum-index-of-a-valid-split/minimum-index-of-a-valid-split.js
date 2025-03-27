/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const n = nums.length;
    
    // Find the dominant element of the entire array
    const dominantElement = findDominantElement(nums);
    
    // Count total occurrences of the dominant element
    const totalCount = nums.filter(num => num === dominantElement).length;
    
    // Track running count of dominant element
    let leftCount = 0;
    
    // Try each potential split index
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === dominantElement) {
            leftCount++;
        }
        
        const rightCount = totalCount - leftCount;
        
        // Check if dominant element in left subarray
        const leftLength = i + 1;
        const isDominantLeft = leftCount * 2 > leftLength;
        
        // Check if dominant element in right subarray
        const rightLength = n - leftLength;
        const isDominantRight = rightCount * 2 > rightLength;
        
        // If both sides have the same dominant element as the original array
        if (isDominantLeft && isDominantRight) {
            return i;
        }
    }
    
    return -1;
};

/**
 * Finds the dominant element in an array
 * @param {number[]} arr
 * @return {number}
 */
function findDominantElement(arr) {
    const counts = {};
    const n = arr.length;
    
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] * 2 > n) {
            return num;
        }
    }
    
    // In case no early return (though problem guarantees there is one)
    return Object.entries(counts).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}
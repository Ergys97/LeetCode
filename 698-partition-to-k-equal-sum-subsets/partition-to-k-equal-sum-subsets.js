var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((a, b) => a + b);
    if (sum % k !== 0) return false;
    let target = sum / k;
    nums.sort((a, b) => b - a);
    let visited = new Array(nums.length).fill(false);
    return search(nums, visited, 0, k, 0, target);
};

function search(nums, visited, start, k, sum, target) {
    if (k === 1) return true;
    if (sum === target) return search(nums, visited, 0, k - 1, 0, target);
    for (let i = start; i < nums.length; i++) {
        if (!visited[i] && sum + nums[i] <= target) {
            visited[i] = true;
            if (search(nums, visited, i + 1, k, sum + nums[i], target)) return true;
            visited[i] = false;
        }
    }
    return false;
}
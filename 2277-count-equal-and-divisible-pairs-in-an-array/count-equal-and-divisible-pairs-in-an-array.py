class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        count = 0
        n = len(nums)
        
        # Iterate over all pairs (i, j) where i < j
        for i in range(n):
            for j in range(i + 1, n):
                # Check if nums[i] == nums[j] and (i * j) % k == 0
                if nums[i] == nums[j] and (i * j) % k == 0:
                    count += 1
        
        return count
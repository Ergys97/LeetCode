from typing import List

class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        n = len(nums)
        max_result = 0
        max_i = 0
        max_diff = 0
        
        for k in range(n):
            if k > 1:
                max_result = max(max_result, max_diff * nums[k])
            
            if k > 0:
                max_diff = max(max_diff, max_i - nums[k])
            
            max_i = max(max_i, nums[k])
        
        return max_result
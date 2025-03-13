class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        first_non_negative = bisect.bisect_left(nums, 0)
        
        first_positive = bisect.bisect_left(nums, 1)
        
        neg_count = first_non_negative
        
        pos_count = len(nums) - first_positive
        
        return max(neg_count, pos_count)
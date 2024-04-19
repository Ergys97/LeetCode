class Solution(object):
    def findValueOfPartition(self, nums):
        nums.sort()
        return min(b - a for a, b in zip(nums, nums[1:]))
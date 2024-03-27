class Solution(object):
    def numSubarrayProductLessThanK(self, nums, k):
        if k <= 1: return 0
        product = 1
        count = left = 0
        for right, val in enumerate(nums):
            product *= val
            while product >= k:
                product /= nums[left]
                left += 1
            count += right - left + 1
        return count
        
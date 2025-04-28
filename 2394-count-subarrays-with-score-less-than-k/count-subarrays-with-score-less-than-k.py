class Solution:
    def countSubarrays(self, nums: list[int], k: int) -> int:
        n = len(nums)
        left = 0  # Left pointer of the sliding window
        current_sum = 0  # Sum of the current window
        count = 0  # Count of valid subarrays

        for right in range(n):
            # Add the current element to the sum
            current_sum += nums[right]

            # Maintain the condition: (current_sum * (right - left + 1)) < k
            while current_sum * (right - left + 1) >= k:
                current_sum -= nums[left]
                left += 1

            # The number of valid subarrays ending at 'right' is (right - left + 1)
            count += (right - left + 1)

        return count
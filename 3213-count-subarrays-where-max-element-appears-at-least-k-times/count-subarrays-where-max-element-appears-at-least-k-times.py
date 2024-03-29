class Solution(object):
    def countSubarrays(self, nums, k):
        max_value = max(nums)
        n = len(nums)
        answer = 0
        count_max = 0
        j = 0
      
        for i, x in enumerate(nums):
            while j < n and count_max < k:
                count_max += nums[j] == max_value
                j += 1
          
            if count_max < k:
                break
            answer += n - j + 1  
            count_max -= x == max_value
      
        return answer
        
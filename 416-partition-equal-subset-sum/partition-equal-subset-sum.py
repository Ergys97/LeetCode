class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total_sum = sum(nums)
        
        # If the total sum is odd, it cannot be partitioned into two equal subsets
        if total_sum % 2 != 0:
            return False
        
        target = total_sum // 2
        n = len(nums)
        
        # Create a DP array to store whether a subset with sum j can be achieved with the first i elements
        dp = [[False] * (target + 1) for _ in range(n + 1)]
        
        # A subset with sum 0 is always possible (the empty subset)
        for i in range(n + 1):
            dp[i][0] = True
        
        # Fill the DP array
        for i in range(1, n + 1):
            for j in range(1, target + 1):
                if nums[i - 1] > j:
                    dp[i][j] = dp[i - 1][j]
                else:
                    dp[i][j] = dp[i - 1][j] or dp[i - 1][j - nums[i - 1]]
        
        return dp[n][target]
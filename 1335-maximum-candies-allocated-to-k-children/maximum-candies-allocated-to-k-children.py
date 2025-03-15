class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        if sum(candies) < k:
            return 0
        
        left, right = 1, max(candies)
        
        while left < right:
            mid = (left + right + 1) // 2
            
            children_served = sum(pile // mid for pile in candies)
            
            if children_served >= k:
                left = mid
            else:
                right = mid - 1
                
        return left
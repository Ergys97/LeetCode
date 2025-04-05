class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        def subsetXOR(index: int, currentXOR: int) -> int:
            if index == len(nums):
                return currentXOR
            include = subsetXOR(index + 1, currentXOR ^ nums[index])
            exclude = subsetXOR(index + 1, currentXOR)
            return include + exclude
        
        return subsetXOR(0, 0)
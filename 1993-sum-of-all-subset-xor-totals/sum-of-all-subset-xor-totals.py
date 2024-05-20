class Solution(object):
    def subsetXORSum(self, nums):
        sum = 0
        subsets = list(chain(*map(lambda x: combinations(nums, x), range(0, len(nums)+1))))

        for subset in subsets:
            xorTotal = 0
            for num in subset:
                xorTotal ^= num
            sum += xorTotal

        return sum
        
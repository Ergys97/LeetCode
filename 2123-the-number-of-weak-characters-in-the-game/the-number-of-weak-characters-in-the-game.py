class Solution(object):
    def numberOfWeakCharacters(self, properties):
        properties.sort(key=lambda x: (-x[0], x[1]))
        max_defense = res = 0
        for _, defense in properties:
            if defense < max_defense:
                res += 1
            else:
                max_defense = defense
        return res
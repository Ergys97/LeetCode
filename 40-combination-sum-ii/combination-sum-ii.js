/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, target, currentCombination) {
        if (target === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > target) {
                break;
            }

            currentCombination.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], currentCombination);
            currentCombination.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let maxLocal = Array(n - 2).fill(0).map(() => Array(n - 2).fill(0));

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let maxVal = -Infinity;
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    maxVal = Math.max(maxVal, grid[i + dx][j + dy]);
                }
            }
            maxLocal[i - 1][j - 1] = maxVal;
        }
    }

    return maxLocal;
};
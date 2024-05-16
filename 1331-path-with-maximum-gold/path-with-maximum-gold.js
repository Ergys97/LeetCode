/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let m = grid.length, n = grid[0].length;
    let maxGold = 0;
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(i, j, gold) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return;
        }

        let temp = grid[i][j];
        gold += temp;
        maxGold = Math.max(maxGold, gold);
        grid[i][j] = 0; // Mark the cell as visited

        for (let [dx, dy] of directions) {
            dfs(i + dx, j + dy, gold);
        }

        grid[i][j] = temp; // Backtrack
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                dfs(i, j, 0);
            }
        }
    }

    return maxGold;
};
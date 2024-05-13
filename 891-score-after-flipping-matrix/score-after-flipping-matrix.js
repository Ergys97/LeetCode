/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let m = grid.length, n = grid[0].length;
    let res = (1 << (n - 1)) * m;

    for (let j = 1; j < n; j++) {
        let cur = 0;
        for (let i = 0; i < m; i++) {
            if (grid[i][0] === 1) {
                cur += grid[i][j];
            } else {
                cur += 1 - grid[i][j];
            }
        }
        res += Math.max(cur, m - cur) * (1 << (n - 1 - j));
    }

    return res;
};
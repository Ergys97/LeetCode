/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    const isMagic = (grid, r, c) => {
        const s = new Set();
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                s.add(grid[i][j]);
            }
        }
        if (s.size !== 9 || [...s].some(x => x < 1 || x > 9)) return false;

        const sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];
        for (let i = 0; i < 3; i++) {
            if (grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] !== sum) return false;
            if (grid[r][c + i] + grid[r + 1][c + i] + grid[r + 2][c + i] !== sum) return false;
        }
        if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== sum) return false;
        if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== sum) return false;

        return true;
    };

    let count = 0;
    for (let i = 0; i <= grid.length - 3; i++) {
        for (let j = 0; j <= grid[0].length - 3; j++) {
            if (isMagic(grid, i, j)) count++;
        }
    }
    return count;
};
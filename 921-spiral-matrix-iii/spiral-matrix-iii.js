/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let result = [];
    let steps = 1;
    let directionIndex = 0;
    let r = rStart, c = cStart;

    result.push([r, c]);

    while (result.length < rows * cols) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < steps; j++) {
                r += directions[directionIndex][0];
                c += directions[directionIndex][1];
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }
            directionIndex = (directionIndex + 1) % 4;
        }
        steps++;
    }

    return result;
};
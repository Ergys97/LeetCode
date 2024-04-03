/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    const rows = Array(numRows).fill('');
    let index = 0, step = 1;

    for (let char of s) {
        rows[index] += char;
        if (index === 0) step = 1;
        else if (index === numRows - 1) step = -1;
        index += step;
    }

    return rows.join('');
};
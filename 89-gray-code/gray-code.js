/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];
    const num = Math.pow(2, n);
    for (let i = 0; i < num; i++) {
        result.push(i ^ (i >> 1));
    }
    return result;
};
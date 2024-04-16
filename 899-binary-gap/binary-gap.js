/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const binary = n.toString(2);
    const ones = binary.split('1');
    ones.pop();
    if (ones.length <= 1) {
        return 0;
    }
    return Math.max(...ones.map(zeros => zeros.length)) + 1;
};
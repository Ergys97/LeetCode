/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let luckyNumbers = [];

    for (let i = 0; i < matrix.length; i++) {
        let minRowValue = Math.min(...matrix[i]);
        let minRowIndex = matrix[i].indexOf(minRowValue);

        let isMaxInColumn = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][minRowIndex] > minRowValue) {
                isMaxInColumn = false;
                break;
            }
        }

        if (isMaxInColumn) {
            luckyNumbers.push(minRowValue);
        }
    }

    return luckyNumbers;
};
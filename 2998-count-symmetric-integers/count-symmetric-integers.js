/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;

    for (let num = low; num <= high; num++) {
        const str = num.toString();
        const length = str.length;

        // Skip numbers with an odd number of digits
        if (length % 2 !== 0) continue;

        const half = length / 2;
        const firstHalfSum = str.slice(0, half).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        const secondHalfSum = str.slice(half).split('').reduce((sum, digit) => sum + parseInt(digit), 0);

        if (firstHalfSum === secondHalfSum) {
            count++;
        }
    }

    return count;
};
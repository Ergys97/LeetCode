/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const count = new Array(1001).fill(0);
    for (let num of arr1) {
        count[num]++;
    }
    let i = 0;
    for (let num of arr2) {
        while (count[num]-- > 0) {
            arr1[i++] = num;
        }
    }
    for (let num = 0; num < count.length; num++) {
        while (count[num]-- > 0) {
            arr1[i++] = num;
        }
    }
    return arr1;
};
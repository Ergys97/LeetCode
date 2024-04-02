/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let left = 1, right = n;
    let total = n * (n + 1) / 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let left_sum = mid * (mid + 1) / 2;
        let right_sum = total - left_sum + mid;
        if (left_sum === right_sum) {
            return mid;
        } else if (left_sum < right_sum) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
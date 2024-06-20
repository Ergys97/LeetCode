/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);
    let low = 0, high = position[position.length - 1] - position[0];
    while (low < high) {
        let mid = Math.floor((low + high + 1) / 2);
        if (check(mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;

    function check(x) {
        let count = 1, curr = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i] - curr >= x) {
                curr = position[i];
                count++;
            }
        }
        return count >= m;
    }
};
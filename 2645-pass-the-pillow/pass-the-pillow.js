/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    const cycleLength = 2 * (n - 1);
    const effectiveTime = time % cycleLength;
    if (effectiveTime < n) {
        return effectiveTime + 1;
    } else {
        return n - (effectiveTime - n) - 1;
    }
};
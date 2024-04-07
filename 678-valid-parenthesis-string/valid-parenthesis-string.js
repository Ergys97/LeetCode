/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let cmin = 0, cmax = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            cmax++;
            cmin++;
        } else if (s[i] === ')') {
            cmax--;
            cmin = Math.max(cmin - 1, 0);
        } else {
            cmax++;
            cmin = Math.max(cmin - 1, 0);
        }
        if (cmax < 0) return false;
    }
    return cmin === 0;
};
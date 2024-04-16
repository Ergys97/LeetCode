/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let low = 0;
    let high = s.length;
    let result = new Array(s.length + 1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            result[i] = low++;
        } else {
            result[i] = high--;
        }
    }
    result[s.length] = low;
    return result;
};
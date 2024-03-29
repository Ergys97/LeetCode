/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();  // Step 1: Ignore leading whitespace

    if (!s) {
        return 0;
    }

    // Step 2: Check if the next character is '-' or '+'
    let sign = 1;
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1);
    } else if (s[0] === '+') {
        s = s.slice(1);
    }

    // Step 3: Read in the next characters until the next non-digit character
    let i = 0;
    while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') {
        i++;
    }

    if (i === 0) {
        return 0;
    }

    let num = parseInt(s.slice(0, i)) * sign;

    // Step 4: Clamp the number to the 32-bit signed integer range
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), Math.pow(-2, 31));

    return num;
};
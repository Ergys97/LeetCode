/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    
    let stack = [];
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (brackets[char]) {
            stack.push(brackets[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
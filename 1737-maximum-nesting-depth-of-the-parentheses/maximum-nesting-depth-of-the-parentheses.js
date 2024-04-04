/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max_depth = 0;
    let current_depth = 0;
    for(let char of s) {
        if(char === '(') {
            current_depth += 1;
            max_depth = Math.max(max_depth, current_depth);
        } else if(char === ')') {
            current_depth -= 1;
        }
    }
    return max_depth;
};
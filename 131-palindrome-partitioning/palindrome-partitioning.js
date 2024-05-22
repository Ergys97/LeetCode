/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    backtrack(s, 0, [], result);
    return result;
}

function backtrack(s, start, current, result) {
    if (start === s.length) {
        result.push([...current]);
        return;
    }

    for (let end = start; end < s.length; end++) {
        if (isPalindrome(s, start, end)) {
            current.push(s.substring(start, end + 1));
            backtrack(s, end + 1, current, result);
            current.pop();
        }
    }
}

function isPalindrome(s, low, high) {
    while (low < high) {
        if (s[low++] !== s[high--]) {
            return false;
        }
    }
    return true;
};
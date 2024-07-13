/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let maxFirst = 'ab', maxPoints = x;
    let minFirst = 'ba', minPoints = y;
    if (y > x) {
        [maxFirst, maxPoints, minFirst, minPoints] = [minFirst, minPoints, maxFirst, maxPoints];
    }

    function removeSubstring(s, sub, points) {
        let stack = [];
        let score = 0;
        for (let char of s) {
            if (stack.length && char === sub[1] && stack[stack.length - 1] === sub[0]) {
                stack.pop();
                score += points;
            } else {
                stack.push(char);
            }
        }
        return [stack.join(''), score];
    }

    let [newS, firstScore] = removeSubstring(s, maxFirst, maxPoints);
    let [, secondScore] = removeSubstring(newS, minFirst, minPoints);

    return firstScore + secondScore;
};
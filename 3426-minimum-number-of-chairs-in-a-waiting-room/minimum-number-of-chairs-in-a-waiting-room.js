/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let availableChairs = 0;
    let chairs = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'E') {
            chairs++;
            if (chairs > availableChairs) {
                availableChairs = chairs;
            }
        } else {
            chairs--;
        }
    }
    return availableChairs;
};
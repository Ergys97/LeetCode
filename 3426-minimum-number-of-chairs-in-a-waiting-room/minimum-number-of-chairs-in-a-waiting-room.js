/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let availableChairs = 0;
    let chairs = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'E') {
            if (availableChairs === chairs) {
                availableChairs++;
                chairs++;
            } else {
                chairs++;
            }
        } else {
            chairs--;
        }
    }
    return availableChairs;
};
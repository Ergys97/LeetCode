/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let char_map = {};
    let mapped_chars = new Set();

    for (let i = 0; i < s.length; i++) {
        let char_s = s[i], char_t = t[i];
        if (char_map[char_s]) {
            if (char_map[char_s] != char_t) {
                return false;
            }
        } else {
            if (mapped_chars.has(char_t)) {
                return false;
            }
            char_map[char_s] = char_t;
            mapped_chars.add(char_t);
        }
    }

    return true;
};
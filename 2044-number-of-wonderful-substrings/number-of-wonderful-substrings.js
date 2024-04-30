/**
 * @param {string} word
 * @return {number}
 */
function wonderfulSubstrings(word) {
    let count = Array(1024).fill(0);
    count[0] = 1;
    let mask = 0;
    let res = 0;
    for (let c of word) {
        mask ^= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        res += count[mask];
        for (let i = 0; i < 10; i++) {
            res += count[mask ^ (1 << i)];
        }
        count[mask]++;
    }
    return res;
}
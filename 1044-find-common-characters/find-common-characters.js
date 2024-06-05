/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const counts = Array(26).fill(Infinity);
    for (let word of words) {
        const wordCounts = Array(26).fill(0);
        for (let c of word) {
            wordCounts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            counts[i] = Math.min(counts[i], wordCounts[i]);
        }
    }
    const result = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < counts[i]; j++) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }
    return result;
};
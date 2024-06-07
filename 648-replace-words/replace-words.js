/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const rootSet = new Set(dictionary);
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        for (let j = 1; j <= words[i].length; j++) {
            const word = words[i].substring(0, j);
            if (rootSet.has(word)) {
                words[i] = word;
                break;
            }
        }
    }
    return words.join(' ');
};
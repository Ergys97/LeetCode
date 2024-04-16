/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words.sort((a, b) => b.length - a.length);
    let encoding = '';
    for (let word of words) {
        if (!encoding.includes(word + '#')) {
            encoding += word + '#';
        }
    }
    return encoding.length;
};
/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function maxScoreWords(words, letters, score) {
    const letterCount = new Array(26).fill(0);
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const wordScores = words.map(word => {
        let wordScore = 0;
        for (let char of word) {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    });

    function canForm(word, letterCount) {
        const count = [...letterCount];
        for (let char of word) {
            if (count[char.charCodeAt(0) - 'a'.charCodeAt(0)]-- <= 0) {
                return false;
            }
        }
        return true;
    }

    function backtrack(index, currentScore, letterCount) {
        if (index === words.length) {
            return currentScore;
        }

        let skipWord = backtrack(index + 1, currentScore, letterCount);

        let includeWord = 0;
        if (canForm(words[index], letterCount)) {
            const updatedCount = [...letterCount];
            for (let char of words[index]) {
                updatedCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
            }
            includeWord = backtrack(index + 1, currentScore + wordScores[index], updatedCount);
        }

        return Math.max(skipWord, includeWord);
    }

    return backtrack(0, 0, letterCount);
}
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let indices = Array.from({length: score.length}, (v, i) => i);
    indices.sort((a, b) => score[b] - score[a]);

    let ranks = new Array(score.length);
    for (let i = 0; i < indices.length; i++) {
        if (i === 0) {
            ranks[indices[i]] = "Gold Medal";
        } else if (i === 1) {
            ranks[indices[i]] = "Silver Medal";
        } else if (i === 2) {
            ranks[indices[i]] = "Bronze Medal";
        } else {
            ranks[indices[i]] = (i + 1).toString();
        }
    }

    return ranks;
};
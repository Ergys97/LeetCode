/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => b - a);
    let result = [deck[0]];

    for (let i = 1; i < deck.length; i++) {
        result.unshift(result.pop());
        result.unshift(deck[i]);
    }

    return result;
};
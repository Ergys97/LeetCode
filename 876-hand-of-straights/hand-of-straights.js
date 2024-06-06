/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }
    const count = new Map();
    for (let card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }
    const sortedHand = Array.from(count.keys()).sort((a, b) => a - b);
    for (let card of sortedHand) {
        if (count.get(card) > 0) {
            for (let i = groupSize - 1; i >= 0; --i) {
                if ((count.get(card + i) || 0) < count.get(card)) {
                    return false;
                }
                count.set(card + i, (count.get(card + i) || 0) - count.get(card));
            }
        }
    }
    return true;
};
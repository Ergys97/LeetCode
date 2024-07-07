/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var nodesBetweenCriticalPoints = function (head) {
    let prev = head, current = head.next, index = 1;
    let firstCriticalPoint = -1, lastCriticalPoint = -1, minDistance = Infinity, maxDistance = -1;

    while (current && current.next) {
        if ((current.val > prev.val && current.val > current.next.val) || (current.val < prev.val && current.val < current.next.val)) {
            if (firstCriticalPoint === -1) {
                firstCriticalPoint = index;
            } else {
                minDistance = Math.min(minDistance, index - lastCriticalPoint);
            }
            lastCriticalPoint = index;
            maxDistance = lastCriticalPoint - firstCriticalPoint;
        }
        prev = current;
        current = current.next;
        index++;
    }

    if (firstCriticalPoint === -1 || lastCriticalPoint === -1 || minDistance === Infinity) {
        return [-1, -1];
    }
    return [minDistance, maxDistance];
};
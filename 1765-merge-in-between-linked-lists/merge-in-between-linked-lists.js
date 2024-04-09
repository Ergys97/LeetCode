/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let prev = null;
    let curr = list1;
    let i = 0;

    while (curr !== null) {
        if (i === a - 1) {
            prev = curr;
        }

        if (i === b + 1) {
            prev.next = list2;

            while (list2.next !== null) {
                list2 = list2.next;
            }

            list2.next = curr;
            break;
        }

        curr = curr.next;
        i++;
    }

    return list1;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    if (!root) return true;

    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let prevValue = level % 2 === 0 ? -Infinity : Infinity;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            let value = node.val;

            if (level % 2 === 0) {
                if (value % 2 === 0 || value <= prevValue) {
                    return false;
                }
            } else {
                if (value % 2 !== 0 || value >= prevValue) {
                    return false;
                }
            }

            prevValue = value;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        level++;
    }

    return true;
};
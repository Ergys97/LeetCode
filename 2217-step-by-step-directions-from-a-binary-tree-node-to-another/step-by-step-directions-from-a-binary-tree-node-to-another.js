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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */

function findPath(root, value) {
    // Helper function to find the path to a given node value
    if (!root) return null;
    if (root.val === value) return '';

    const leftPath = findPath(root.left, value);
    if (leftPath !== null) return 'L' + leftPath;

    const rightPath = findPath(root.right, value);
    if (rightPath !== null) return 'R' + rightPath;

    return null;
}
var getDirections = function (root, startValue, destValue) {
    const pathToStart = findPath(root, startValue);
    const pathToDest = findPath(root, destValue);

    let i = 0;
    while (i < pathToStart.length && i < pathToDest.length && pathToStart[i] === pathToDest[i]) {
        i++;
    }

    return 'U'.repeat(pathToStart.length - i) + pathToDest.substring(i);
}
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
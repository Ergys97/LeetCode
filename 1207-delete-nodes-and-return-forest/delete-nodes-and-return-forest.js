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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const forest = [];

    function traverse(node, isRoot) {
        if (!node) return null;
        const deleted = toDeleteSet.has(node.val);
        if (isRoot && !deleted) forest.push(node);
        node.left = traverse(node.left, deleted);
        node.right = traverse(node.right, deleted);
        return deleted ? null : node;
    }

    traverse(root, true);
    return forest;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}
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
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sumNumbers = function(root) {
    return dfs(root, 0);
};

function dfs(node, prevSum) {
    if (node === null) {
        return 0;
    }
    let sum = prevSum * 10 + node.val;
    if (node.left === null && node.right === null) {
        return sum;
    } else {
        return dfs(node.left, sum) + dfs(node.right, sum);
    }
}
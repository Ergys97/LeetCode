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
var distributeCoins = function(root) {
    let moves = 0;

    function dfs(node) {
        if (node === null) {
            return 0;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);
        moves += Math.abs(left) + Math.abs(right);

        return node.val + left + right - 1;
    }

    dfs(root);

    return moves;
};
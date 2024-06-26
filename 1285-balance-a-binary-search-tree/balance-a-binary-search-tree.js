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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let nodes = [];
    
    function inOrder(node) {
        if (!node) return;
        inOrder(node.left);
        nodes.push(node.val);
        inOrder(node.right);
    }
    
    inOrder(root);
    
    function buildBST(start, end) {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(nodes[mid]);
        node.left = buildBST(start, mid - 1);
        node.right = buildBST(mid + 1, end);
        return node;
    }
    
    return buildBST(0, nodes.length - 1);
};
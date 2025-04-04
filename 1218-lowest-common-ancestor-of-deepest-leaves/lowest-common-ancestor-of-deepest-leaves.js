1
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
var lcaDeepestLeaves = function(root) {
    function dfs(node, depth) {
        if (!node) return [null, depth - 1];
        
        if (!node.left && !node.right) {
            return [node, depth];
        }
        
        const [leftLCA, leftDepth] = dfs(node.left, depth + 1);
        const [rightLCA, rightDepth] = dfs(node.right, depth + 1);
        
        if (leftDepth === rightDepth) {
            return [node, leftDepth];
        }
        
        return leftDepth > rightDepth ? [leftLCA, leftDepth] : [rightLCA, rightDepth];
    }
    
    return dfs(root, 0)[0];
};
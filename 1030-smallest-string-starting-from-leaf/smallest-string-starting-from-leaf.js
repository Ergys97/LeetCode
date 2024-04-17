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
 * @return {string}
 */
function smallestFromLeaf(root) {
    let smallest = '~';
    const A = 'a'.charCodeAt(0);

    const dfs = (node, path) => {
        if (node) {
            path = String.fromCharCode(node.val + A) + path;
            if (!node.left && !node.right && path < smallest) {
                smallest = path;
            }
            dfs(node.left, path);
            dfs(node.right, path);
        }
    };

    dfs(root, '');
    return smallest;
}
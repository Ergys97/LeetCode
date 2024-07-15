/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = this.right = null;
        }
    }

    const nodes = new Map();
    const children = new Set();

    // Create nodes and mark children
    for (const [parent, child, isLeft] of descriptions) {
        if (!nodes.has(parent)) nodes.set(parent, new TreeNode(parent));
        if (!nodes.has(child)) nodes.set(child, new TreeNode(child));

        if (isLeft) {
            nodes.get(parent).left = nodes.get(child);
        } else {
            nodes.get(parent).right = nodes.get(child);
        }

        children.add(child);
    }

    // Find root (a node that is never a child)
    let root = null;
    for (const [parent] of descriptions) {
        if (!children.has(parent)) {
            root = nodes.get(parent);
            break;
        }
    }

    return root;
};
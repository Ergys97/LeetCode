function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var findTarget = function(root, k) {
    let nums = [];
    inorder(root, nums);
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum === k) return true;
        if (sum < k) l++;
        else r--;
    }
    return false;
};

function inorder(root, nums) {
    if (root === null) return;
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
}
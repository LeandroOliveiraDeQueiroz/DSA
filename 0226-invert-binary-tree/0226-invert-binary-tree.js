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
/*
    pre Order traverse in the tree
        
        if null return null

        node.left = recursivity of right
        node.right = ''         '' of left

        In the final it will return the node;

        TC = O(n)
        SC = O(h),   h <= n && h >= log n 
        tree for one side and balanced tree

*/

var invertTree = function(node) {
    if(!node)
        return null;

    const tempLeft = node.left
    node.left = invertTree(node.right);
    node.right = invertTree(tempLeft);

    return node;
};
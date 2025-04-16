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
 * @param {number} k
 * @return {number}
 */

/*
    inorder -> 1, 2, 3, 4
    counter out the function
*/

var kthSmallest = function(root, k) {
    let counter = 1;

    const getKthSmallest = (node) => {
        if(!node)
            return -1;

        const left = getKthSmallest(node.left);
        if(left !== -1)
            return left;
        
        if(counter === k)
            return node.val;

        counter++;

        const right = getKthSmallest(node.right);
        if(right !== -1)
            return right;

        return -1;
    }

    return getKthSmallest(root);
};
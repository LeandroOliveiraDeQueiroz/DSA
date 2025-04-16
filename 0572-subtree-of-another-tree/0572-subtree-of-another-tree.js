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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!subRoot) return false;
    return findNode(root, subRoot);
};

const findNode = (node, second) => {
    if(!node)
        return false;

    if(node.val === second.val) {
        const compare = compareTrees(node, second)

        if(compare) return compare;
    }
        
    
    const left = findNode(node.left, second);

    if(left)
        return left;

    const right = findNode(node.right, second);

    if(right)
        return right;

    return false;
}

const compareTrees = (first, second) => {
    if(!first && !second)
        return true;

    if(!first || !second)
        return false;

    if(first.val !== second.val)
        return false;

    return compareTrees(first.left, second.left) && compareTrees(first.right, second.right) 
};
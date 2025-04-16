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

 /*
    The max path sum don't need pass in the root;
    Have negative numbers
    Do a path can have 1 node? or 0 nodes?
    Assumption: I think can have 1, but not 0 

    TC O(n) 
    SC O(h)    log n <= h <= n 

        node
    node    node

    The better path sum in this tree can be the left node (subtree), the right node (subtree), the path passing on the node or just the node value

    I need to have to things saved:
        The max value until now
        The max path from the subtree I am testing

    The max value can be different than the max path

        2
    1      -10
        3        20
              400   7000


    Max sum :
        Max(node.left, left.node + node + node.right, node.right, node)

    
    Edge cases:
        path that don't use the root
        path that use the root
        Unique node 
        single positive node
        negative node

 */
var maxPathSum = function(root) {  
    const {max} = getMaxPathSum(root);
    return max;
};

const getMaxPathSum = (node) => {
    if(!node)
        return {};

    const left = getMaxPathSum(node.left);
    const right = getMaxPathSum(node.right);

    let maxPath = node.val;

    if(left.maxPath !== undefined)
        maxPath = Math.max(maxPath, left.maxPath + node.val)

    if(right.maxPath !== undefined)
        maxPath = Math.max(maxPath, right.maxPath + node.val)
    
    let max = maxPath;

    if(left.maxPath !== undefined &&  right.maxPath !== undefined)
        max = Math.max(max, left.maxPath + node.val + right.maxPath);

    if(left.max !== undefined)
        max = Math.max(max, left.max);
        
    if(right.max !== undefined)
        max = Math.max(max, right.max);

    return {max, maxPath};
}
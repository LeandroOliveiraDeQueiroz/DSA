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
 * @return {boolean}
 */

 /*
    To check if is a binary tree I need pass the limits for the node
        the lowerLimit and upperLimit

    On root start without

       5
    1     7
        4

    Wrong tree!

    UpperLimit:  N  5 N 7
    LowerLimit:  N  N 5 5
    value:       5  1 7 4! 
    
    Or my nodes values need to have a limit scope
    Or I will need to handle with number and null||undefined
    In js I can do using just one variable, other language would need some boolean and the number
 */


var isValidBST = function(node, lowerLimit, upperLimit) {
    if(!node) return true;

    if(lowerLimit !== undefined && node.val <= lowerLimit)
        return false;

    if(upperLimit !== undefined && node.val >= upperLimit)
        return false;

    
    return isValidBST(node.left, lowerLimit, node.val) && isValidBST(node.right, node.val, upperLimit)
};

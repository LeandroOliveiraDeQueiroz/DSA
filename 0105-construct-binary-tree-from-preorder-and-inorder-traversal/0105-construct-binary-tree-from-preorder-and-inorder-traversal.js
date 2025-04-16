/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*
    n = nodes quantity
    TC = O(n^2) => if is a search binary tree can change to O(n* log n);
        n for traverse all nodes of the preorder
        n for find the preorder[index] in the inorder

    SC = O(h)  log n <= h <= n  
*/

var buildTree = function(preorder, inorder) {
    let i = 0;

    const createTree = (start, end) => {
        if(i >= preorder.length)
            return null;

        let inOrderIndex = -1;

        for(let j = start; j <= end; j++){
            if( preorder[i] === inorder[j]) {
                inOrderIndex = j;
                break;
            }
        }



        if(inOrderIndex === -1)
            return null;

        const node = new Node(preorder[i++]);
        node.left = createTree(start, inOrderIndex-1);
        node.right = createTree(inOrderIndex+1, end);
        
        return node;
    }

    return createTree(0, preorder.length-1);
};

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
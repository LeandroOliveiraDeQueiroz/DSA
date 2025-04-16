/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 /*
    node to be a descendant of itself

    as both exist in the BST means in the worst case the root is the lower common ancestor (LCA)

    Ideia: 
        if p or q is the node = LCA

        else if 
            both need walk for the same side of the tree => so the LCA is depeer

        if each one go for a different direction -> the node now is LCA 

 */
var lowestCommonAncestor = function(node, p, q) {
    if(!node)
        throw "Algorithm wrong or p and q does not exist in the tree";

    if(node.val === p.val || node.val === q.val) 
        return node;

    if(node.val > p.val && node.val > q.val)
        return lowestCommonAncestor(node.left, p, q);

    if(node.val < p.val && node.val < q.val)
        return lowestCommonAncestor(node.right, p, q);

    return node;
};
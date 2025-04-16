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
 * @return {number[][]}
 */

 /*
    tree === graph

    in-order, pre-order, post-order => DFS

    BFS

    TC O(n)
    SC O(number of nodes in a height) = O(2) = O(1) // not considering the return array

    [root]

    until queue not empty
        I will process all the nodes queue
            get the children and put in the queue
            put the node in the array of the X height - actual height

        for don't mess with the node I can use two arrays or get the length before start

    queue: [3], [9, 20] [15,] 
    length: 1, 2, 1
    result: [], [[3]], [[3], [9, 20]]

    edge case:
        Can be a null tree?
        1 single node
        1 child

 */
var levelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    const result = [];

    while(queue.length !== 0) {
        const queueLength = queue.length;
        const actualHeightNodes = [];
        for(let i = 0; i < queueLength; i++) {
            const node = queue.shift();
            if(node.left)
                queue.push(node.left)
            
            if(node.right)
                queue.push(node.right)

            actualHeightNodes.push(node.val);
        }

        result.push(actualHeightNodes)
    } 

    return result; 
};
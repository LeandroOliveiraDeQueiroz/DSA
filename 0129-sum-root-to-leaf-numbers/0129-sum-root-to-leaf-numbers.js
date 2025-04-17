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
    1
   2 3
 
 12 + 13

   traverse
   Time complexity O(n)
 
   pre-order
   acc param = 0

        1
    2        3
  

 node    1  2    4    null null   3
 acc = 0 1  12  124   -1   -1     13
sum = 0  0 0    124               



  acc = 1
  left = 124
  rigt = 13

  left + right;

    []

 let sum = 0;

  !node 
    return -1;

  node
  acc*10+ node.value;
    
    left = recursibity(acc*10)
    right

    if(left + right === -2)
        sum+=

    return left + right;

    O(n) time complexity
    O(n) space complexity   

    log n <= h <= n

    Edge cases
        1   
        null

        2
      1   0
    5

    215 + 20 = 235
    215 + 201 = 416

    Test

 */
var sumNumbers = function(root) {
    let sum = 0;

    const traverseTree = ((node, acc = 0) => {
        if(!node)
            return;

        acc = 10 * acc + node.val;

        traverseTree(node.left, acc);
        traverseTree(node.right, acc);

        if(node.left === null && node.right === null) {
            sum += acc;
        }

    });

    traverseTree(root);

    return sum;
};
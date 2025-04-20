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
    backtracking
    store variable - outside

    I need deep 

    If left and right are leaves

    I know this is a valid result - check the deep with actual result;




    1.

        globalDeep = 4
        node = [left, right]

        quantity leaves =>  O(2^h-1*n)




        node.



        5 height
        left === right 


        3 -> 5 -> 6 -> 2 -> 7 -> 4 -> 1 -> 0 -> 8 - > 9 -> 10

          8 
       9     10
        

       2 leaves with the same height
       means result;

       leaf deepest



       5 left height = 2     
       2.left height = 3
       2.right height = 3
       1.left height = 2
       1.right height = 2
       8.left height = 3 
       8.right height = 3

       8 valid as LCA
       2


        if(height > globlaDeep)
            globalDeep = height
            node = actualNode // 1


       right === left && rigth !== -1 => LCA

    2.
         5    
      6    2
       7  4
    

    if(!node)
        -1

    


    if(leaf)
        return deep 

    deep of left and right node are same => lower common ancestor


*/



var lcaDeepestLeaves = function(root) {
    let maxDeep = -1;
    let nodes = [];
    const set = new Set();


    const traverseLeaves = (node, height =0) => {
        if(!node)
            return

        
        traverseLeaves(node.left,  height + 1);
        traverseLeaves(node.right, height + 1);

        const isLeaf = !node.left && !node.right;

        if(isLeaf && height > maxDeep) {
            maxDeep = height;
            nodes = [];
        }

        if(isLeaf && height === maxDeep) {
            nodes.push(node);
        }
    }

    traverseLeaves(root);

    nodes.forEach((node)=>{
        set.add(node.val)
    })

    // console.log('set', set)

    let lca = null;

    const getLCAByNodes = (node, quantity) => {
        if(!node)
            return 0;

        // console.log('quantity', quantity)

        let result = getLCAByNodes(node.left,quantity) + getLCAByNodes(node.right, quantity);

        if(set.has(node.val))
            result += 1;

        if(result === quantity) {
            lca = node;
            return -1;
        }

        return result;
    }

    getLCAByNodes(root, nodes.length);


    return lca
};

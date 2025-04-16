/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /*
    2 serialize ways:

    Heap
        2i+1 + 2i+2

    deepFirstSearch
    my queue I can have a tuple as value:
        [fatherIndex, child, node]; //child 1 or 2

    if(doesn't exist the the space on the array I must push null until reach the value)

    To re-create:
        node get the value (ParseInt) of the index
        create left and create right passing the child index
        if the index is bigger than the length return null;



    Second option:
    in-order + preorder
    easy to create, 
    had to go back

    TC O(n)

 */

/* PREORDER WAY */
 /**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {   
    const inOrderStringBuilder = [];
    getInOrderString(root, inOrderStringBuilder);

    return inOrderStringBuilder.join(',');
};

const getInOrderString = (node, stringBuilder) => {
    if(!node)
        return stringBuilder.push('null');
    
    stringBuilder.push(node.val);
    getInOrderString(node.left, stringBuilder);
    getInOrderString(node.right, stringBuilder);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const stringBuilder = data.split(",");
    let i = 0;

    const createTreeFrom = (stringBuilder) => {
        if(i >= stringBuilder.length)
            throw 'Erro'

        const value = stringBuilder[i++];

        if(value === 'null')
            return null

        const node = new Node(parseInt(value));

        node.left = createTreeFrom(stringBuilder);
        node.right = createTreeFrom(stringBuilder);
        
        return node;
    }

    return createTreeFrom(stringBuilder);
};

/* HEAP WAY O(n) */
/* Works, but memory overflow */
// /**
//  * Encodes a tree to a single string.
//  *
//  * @param {TreeNode} root
//  * @return {string}
//  */
// var serialize = function(root) {
//     if(!root) return "";
//     const queue = [[0, 0,root]];
//     const stringBuilder = [];

//     while(queue.length !== 0) { // SC O(leaves) = O(2^h-1) < O(n) 3 => 1 2 4 6  2^3-1 = 2^2 = 4 
//         const [fatherIndex,childType, node] = queue.shift();
//         const index = 2* fatherIndex + childType;
//         while(index >= stringBuilder.length) {
//             stringBuilder.push('null');
//         }

//         stringBuilder[index] = node.val;

//         if(node.left)
//             queue.push([index, 1, node.left])

//         if(node.right)
//             queue.push([index, 2, node.right])
//     }

//     const result = stringBuilder.join(',');

//     return result;
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//     const stringBuilder = data.split(',');
//     const root = getTreeFromStringBuilder(stringBuilder, 0);

//     return root;
// };


// const getTreeFromStringBuilder = (stringBuilder, index) => {
//     if(index >= stringBuilder.length)
//         return null;

//     const value = stringBuilder[index]

//     if(value === 'null' || value === '') 
//         return null;

//     const parsedValue = parseInt(value);

//     const node = new Node(parsedValue);
    
//     node.left = getTreeFromStringBuilder(stringBuilder, index* 2 + 1);
//     node.right = getTreeFromStringBuilder(stringBuilder, index* 2 + 2);

//     return node;
// }

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
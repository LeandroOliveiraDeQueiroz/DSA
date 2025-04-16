/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 /*
    Check empty board
 */
var findWords = function(board, words) {
    const trie = new Trie();
    const result = new Set();

    for(const word of words) 
        trie.insert(word);

    // trie.show();

    for(let i = 0; i < board.length; i++ ){
        for(let j = 0; j < board[0].length; j++){
            const letter = board[i][j];
            if(trie.hasFirst(letter)) {
                // console.log(`letter: ${letter} - new DFS`)
                dfs(board, trie.root.children, i, j, result);
            }
        }
    }

    return Array.from(result.values());
};

const dfs = (board, children, i, j, result, acc="") => {
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length)
        return;
    
    if(board[i][j] === '#')
        return;

    const temp = board[i][j];
    board[i][j] = '#'
    
    // console.log(`board[${i}][${j}]: ${temp}`)

    const index = Node.mapLetterToChildren(temp);
    const node = children[index]
    if(node) {
        // acc += temp; // TODO can be optmize
        if(node.endOfWord) {
            // result.add(acc);
            result.add(node.word)
        }

        dfs(board, node.children, i-1, j, result, acc);
        dfs(board, node.children, i+1, j, result, acc);
        dfs(board, node.children, i, j-1, result, acc);
        dfs(board, node.children, i, j+1, result, acc);

    }

    board[i][j] = temp;
}

class Node {
    constructor(value){
        this.value = value;
        this.children = new Array(26);
        this.endOfWord = false;
        this.word = "";
    }

    static mapLetterToChildren (letter) {
        return letter.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}

class Trie {
    constructor() {
        this.root = new Node("");
    }

    insert(word) {
        let curr = this.root;

        for(const letter of word) {
            const index = Node.mapLetterToChildren(letter);
            if(!curr.children[index])
                curr.children[index] = new Node(letter);

            curr = curr.children[index];
        }

        curr.endOfWord = true;
        curr.word = word;
    }

    hasFirst(letter) {
        const index = Node.mapLetterToChildren(letter);
        return !!this.root.children[index];
    }

    show() {

        const traverse = (node) => {
            if(!node)
                return

            console.log(node.value)

            if(node.endOfWord)
                console.log('End of word')

            node.children.forEach((child) => {
                traverse(child);
            })
        }

        traverse(this.root);
    }
}
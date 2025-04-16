
/*
    Insert:
    Time complexity = O(1*l) 
    Space complexity = O(1*w*l)

    Search:
    Time complexity = O(1*l) 
    Space complexity = O(1)

    StartsWith:
    Time complexity = O(1*l) 
    Space complexity = O(1)
    w = words quantity
    l = letter quantity


    Search and StartWith can be made by the same function:
        Search:
            get a node based of a word;
            Check if the node and node.children[26] (*) exists

        Search:
            get a node based of a word;
            Check if the node exists
*/


class Node {
    constructor(val) {
        this.value = val;
        this.children = new Array(27);
    }

    static mapLetter(word) {
        return word.charCodeAt(0) - 'a'.charCodeAt(0)
    }

}


var Trie = function() {
    this.dummyHead = new Node("");
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.dummyHead;
    for(const letter of word) {
        const index = Node.mapLetter(letter);
        if(!current.children[index])
            current.children[index] = new Node(letter);

        current = current.children[index];
    }

    current.children[26] = new Node('*');

    console.log('head');
    // this.traverse();
};

Trie.prototype.traverse = function() {
    const preOrder = (node) => {
        if(!node)
            return;

        console.log(node.value);

        if(node.value === 'e')
            console.log('children of e:', node.children)
        
        node.children.forEach((child) => {
            preOrder(child);
        });
    }

    preOrder(this.dummyHead);
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.dummyHead;

    for(const letter of word) {
        const index = Node.mapLetter(letter);
        if(!current.children[index])
            return false;

        current = current.children[index];
    }

    return !!current.children[26];
};


/* Is the word prefix of itself? */
/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.dummyHead;

    for(const letter of prefix) {
        const index = Node.mapLetter(letter);
        if(!current.children[index])
            return false;

        current = current.children[index];
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
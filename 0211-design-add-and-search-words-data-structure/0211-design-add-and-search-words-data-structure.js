
/*  
    Insert - each one
        TC  O(l)
        SC  O(l)
    

    search:
        TC O(w*l)
        SC O(l)
    
*/


var WordDictionary = function() {
    this.root = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;

    for(const letter of word) {
        if(!curr.has(letter))
            curr.set(letter, new Map());

        curr = curr.get(letter);
    }

    curr.set('*', null);

};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const searchWord = (node, i, word) => {
        if(!node)
            return false;

        if(i === word.length)
            return node.has('*');

        const letter = word[i]

        if(letter !== '.') {
            if(!node.has(letter))
                return false;

            return searchWord(node.get(letter), i + 1, word)
        } else {
            const values = node.values();

            for(const map of values) {
                if(searchWord(map, i + 1, word)) {
                    return true;
                }
            }

        }
        
        return false;
    }


    return searchWord(this.root, 0, word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
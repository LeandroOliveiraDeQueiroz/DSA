/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
    Lower case english letter

    What I can do is:
        For words
        For groups 
            If the word is in no group, create a new group
            How to check if is in the same group: compare the letter frequency
        
        N^2

    I need traverse all words, therefore is impossible remove the words for
    And I need to get the letter frequency or sort the word to check if is anagram of other letter

    Sort use more time and store frequency more space. Make sense sort if the letter quantity by word is small
    About store which group will have their frequency storage
    Worst case O(n) space complexity - each word in a different group

    I can create a string hash based on the frequency of the 26 lowercase english letters

*/

/*
    w = word quantity * letter per/ word
    TC = O(w + groups) = O(w + w) = O(w)
    SC = O(26groups + groups * word group ) = O(w + w) = O(w)
*/

var groupAnagrams = function(strs) {
    const groups = new Map();

    for(const str of strs) {
        const hash = getHash(str);
        if(!groups.has(hash)) 
            groups.set(hash, []);

        const group = groups.get(hash);
        group.push(str);
    }

    const result = Array.from(groups.values());
    
    return result;
};

const getHash = (word) => {
    const array = new Array(26).fill(0);
    const frequencyStringBuilder = [];
    for(let i = 0; i < word.length; i++) {//
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
        array[index]++;
    }

    array.forEach((frequency) => {
        frequencyStringBuilder.push(frequency +',');
    })

    return frequencyStringBuilder.join('');
}
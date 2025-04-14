/**
 * @param {string} s
 * @return {number}
 */

/*
    Is case sensitive?
    Just letter are alowed?

    Brute force would have 2 for: 
        Count from a letter until apear the same letter again
    Time Complexity = O(n"2)
    Space Complexity = O(1)
    
    Traverse
    Store the last time appeared a letter
    I can create a index that will be the position to start count the string
    Everytime appear a char that already was used move this index for
        max between the actual position and the last time the letter appeared + 1
    
    appeared and last time appeared I will get by the data stored
    Can be a array or a hash - depends of the input possibilities
    counter = end - start + 1

    Time Complexity = O(n) - mininum possible
    Space Complexity = O(n)

    Teste:
    abcaab

    end   = 0 1 2 3 4 5
    start = 0 0 0 1 4 4
    max   = 1 2 3 3 3 3
    hash = 
    {
        a: 4
        b: 2
        c: 2
    }

    edge cases:
    empty -> start max with 0
    'bbbbb' -> 
*/


var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let start = 0;
    let longest = 0;

    for(let end = 0; end < s.length; end++) {
        const char = s[end];
        if(map.has(char))
            start = Math.max(start, map.get(char)+1);

        longest = Math.max(longest, end -start + 1);
        map.set(char, end);
    }

    return longest;
};
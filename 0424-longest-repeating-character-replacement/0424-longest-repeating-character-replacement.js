/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 /*
    Upper case -> If I need memory I can use a array with 26 positions - Space Complexity constant

    Brute force -> 2 for and use the counter

    I can have a buffer of the letter I get to count quantity

    ABABB

    buffer =         A B
    changeQuantity = 0 1 1 2 
    output =         1 2 3 4 

    slide window - start and end
    end = the traversing index
    start = the character that is being checked 
    
    array = count the quantity of each letter
    
    How I know my actual k (quantity of different letters)?
    end - start - array[s[start]] // quantity of characters of the start letters

    When actual k > k  shrink the window 
        traverse start until "actual k" <= k
        On traverser: decrease array quantity of the letters
        As start change the fixed character will be the same

    longest = max(longest, end - start + 1) 

    have a reference for the start count of the string
    and other on the end (Traverse letter now)

    edge case:
        s empty
        k = 0
        1 letter
 */
var characterReplacement = function(s, k) {
    let start = 0;
    let longest = 0;
    let array = new Array(26).fill(0);

    for(let end = 0; end < s.length; end++) {
        const letter = s[end];
        const position = getArrayPosition(letter);
        array[position]++;

        while(end - start + 1 - Math.max(...array) > k ){
            const startChar = s[start];
            const startCharPosition = getArrayPosition(startChar);
            array[startCharPosition]--;
            start++;
        }

        longest = Math.max(longest, end - start + 1);
    }

    return longest;
};


const getArrayPosition = (letter) =>  letter.charCodeAt(0) - 'A'.charCodeAt(0)
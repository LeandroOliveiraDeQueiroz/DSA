/**
 * @param {string} s
 * @return {number}
 */

/*
    Normally I can get a palindromic using a pointer on the start and end of the string
    I this case is to get all substring panlidrome from every start

    Input: s = "aaa"
    Output: 6
    Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

    I can do 2 for
    i start 0 and j start with i
    check if the substring i,j is a palidrome

    O(n^3) 2 for and the checking

    Instead of get a substring and check I can:
    Traverse the string and try grow a palindromic word:

    aaa

    i = 0, 1, 2

    Grow from 0:
        odd:  a  -1aa  => 1
        even: aa -1aaa => 1

    Grow from 1:
        odd: a aaa -1aaa-1 => 2
        even: aa aaa-1 => 1
    
    Grow from 2:
        odd: a aa-1 => 1
        even a-1 => 0

    total = 6;


    odd and even palindromic work a little different:
        odd: i === i    //aba
        even i === i+1  //aa

    TC O(n^2)


    Edge cases:
        abc // single palindromics
        aaa // same letters
        a // just a letter
        "" // empty

    Pay attention: a grow of from a index can count the same panlindromic of a grow of other?

*/

var countSubstrings = function(s) {
    let total = 0;
    for(let i = 0; i < s.length; i++) {
        const oddQuantity = getPalindromicQuantity(i, i, s);
        const evenQuantity = getPalindromicQuantity(i, i+1, s);
        total += oddQuantity +evenQuantity; 
    }

    return total;
};

const getPalindromicQuantity = (start, end, s) => {
    let palindromics = 0;

    while(start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
        palindromics++;
    }

    return palindromics;
}

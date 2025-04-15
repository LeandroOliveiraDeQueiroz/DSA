/**
 * @param {string} s
 * @return {string}
 */

/*
    Brute force
    for i=0
        for j=1
            checkPalindrome(substring(i,j)); // 2 pointers

    n = number of letters

    TC = O(n^3)

    Some letter or a pair of a letter must be the start of of the palindrome

    aba 
    aa 

    If I find a middle I can try grow the palindromic from there

    So, my start and end of the palindromic will grow from the middle and will stops when:
        String finished on start
                            end 
        A different letter

    Edge cases:
        2 chars
        1 char // always palindromic

        TC n^2

*/
var longestPalindrome = function(s) {
    if(!s ||s.length === 0)
        return "";

    let maxStart = 0;
    let maxEnd = 0;

    for(let i = 0; i < s.length; i++) {
        const odd =  getPalindromic (i, i, s);
        const even =  getPalindromic (i, i+1, s);

        const oddLength = odd.end - odd.start
        const evenLength = even.end - even.start
        const bigOdd = oddLength >= evenLength;

        //TODO - remove duplicate code - create a function
        if(bigOdd && oddLength > maxEnd - maxStart) {
            maxStart = odd.start;
            maxEnd = odd.end;
        }

        if(!bigOdd && evenLength > maxEnd - maxStart) {
            maxStart = even.start;
            maxEnd = even.end;
        }
    }

    return s.substring(maxStart, maxEnd+1);
};

const getPalindromic = (start, end, s) => {

    while(start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }

    return {start:start+1, end: end-1};
}
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = {};
    let maxSequence = 0;
    let sequence = 0;
    for(let i = 0; i < s.length; i++){
        if(hash[s.charAt(i)] != null && hash[s.charAt(i)] >= i -sequence ){
            maxSequence = maxSequence < sequence ? sequence : maxSequence;
            sequence = i - (hash[s.charAt(i)] + 1);
        }
        
        hash[s.charAt(i)] = i;
        sequence++;
    }
    
    maxSequence = maxSequence < sequence ? sequence : maxSequence;
    
    return maxSequence;
};
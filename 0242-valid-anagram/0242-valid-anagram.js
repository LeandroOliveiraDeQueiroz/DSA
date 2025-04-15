/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const tMap = new Map();

    for(const char of t) {
        if(!tMap.has(char))
            tMap.set(char, 0)
        
        tMap.set(char, tMap.get(char) + 1)
    }

    for(const char of s) {
        if(!tMap.has(char) || tMap.get(char) === 0)
            return false;

        tMap.set(char, tMap.get(char) - 1)
    }


    return true;
};
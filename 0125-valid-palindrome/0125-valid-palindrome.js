/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0, end = s.length -1;

    while(start < end) {
        while(start < end && !isAlphaNumeric(s[start])) start++;
        while(end > start && !isAlphaNumeric(s[end])) end--;
    
        if(start < end) {
            if(transformLetter(s[start]) !== transformLetter(s[end]))
                return false;

            start++;
            end--;  
        } 
    }

    return true;
};

const isAlphaNumeric = (character) =>{
    if(character >= 'a' && character <= 'z')
        return true;

    if(character >= 'A' && character <= 'Z')
        return true;

    if(character >= '0' && character <= '9')
        return true;

    return false;
}  

const transformLetter = (character) => {
    if(character >= 'A' && character <= 'Z')
        return character.toLowerCase();

    return character;
}
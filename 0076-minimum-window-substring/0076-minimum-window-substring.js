/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/*
    Upper and lower cases - case sensitive
    52 character - hash or array -> O (1) space complexity

    I can get the letter frequencies of t and store
    I can have a another hash of my window frequency and a total counter
    Total will increase just when the letter is on T and letter frequency in s is smaller than t
    
    s = "ADOBECCODEBANC", t = "ABC"

    t      a:1 b:1 c:1
    s      a:1 d:1 o:1 b:1 e:1 c:1 c:2 
    total= 1   1   1   2   2    3  3   
                                possible 
                                solution - try shrink the window

    if totalCounter === t.length => find pattern
        but may the window be shrink because of unused characters on the window start
    

    edge cases:
        no window substring
        empty s
        empty t
*/

var minWindow = function(s, t) {
    if(s.length === 0 || t.length === 0) return "";

    let totalCounter = 0;
    let tFrequency = new Map();
    let sFrequency = new Map();
    let start = 0;
    let output;

    for(const letter of t) {
        addFrequency(letter, tFrequency);
    }

    for(let end = 0; end < s.length; end++) {
        const letter = s[end];
        
        if(shouldCountFrequency(letter, tFrequency,sFrequency,)) {
            totalCounter++;
        }

        addFrequency(letter, sFrequency);

        if(totalCounter === t.length) {
            start = tryShrinkWindow(start, end, sFrequency, tFrequency, s);
            const possibleOutput = s.substring(start, end+1);
            if(!output)
                output = possibleOutput;
            else
                output = output.length <= possibleOutput.length ? output : possibleOutput;
        }
    }

    return output ? output : "";
};

const shouldCountFrequency = (letter, tFrequency,sFrequency) => {
    if(!tFrequency.has(letter))
        return false;

    if(!sFrequency.has(letter))
        return true;

    const letterFrequencyAtT = tFrequency.get(letter);
    const letterFrequencyAtS = sFrequency.get(letter);

    if(letterFrequencyAtS < letterFrequencyAtT)
        return true;

    return false;
}

const addFrequency = (letter, frequencyMap) => {
    if(!frequencyMap.has(letter))
            frequencyMap.set(letter, 0);

        frequencyMap.set(letter, frequencyMap.get(letter)+1);
}

const tryShrinkWindow = (start, end, sFrequency, tFrequency, s) => {

        let letter = s[start];
        let startSFrequency = sFrequency.get(letter)
        let startTFrequency = tFrequency.get(letter)


    while(start <= end && (!tFrequency.has(letter) || startSFrequency > startTFrequency) ) {
        sFrequency.set(letter, startSFrequency-1);

        start++;
        letter = s[start];
        startSFrequency = sFrequency.get(letter);
        startTFrequency = tFrequency.get(letter);
    }

    return start;
}

/*
    Complexity
    Time = O(n)
    Space = O(sFrequency + tFrequency) = O(52 || 52) = O(1)

    Improvements:
        Create a class - pass reference as param and change the inside values isn't a good practice
        Get start and end of the better solution and get the substring just in the final of the algorithm
        Change s and t string names - no meaningfull names
*/
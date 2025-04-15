/**
 * @param {string} s
 * @return {boolean}
 */
/*
    open (, [ { add on the stack
    ) ] } remove a item from the stack

    if Some operation failes answer false
    if the stack isn't empty on the end -> return false
    otherwise return true;

    Can I do without a stack?
        As exist 3 types of opening and the other is necessary make sense have stored

    A pointer on the start and end don't work in cases as "()[]{}"

    The algo will run in O(n) time complexity, by n being the number of characters
    And the stack can have max n itens, so O(n) space complexity

    Egde cases:
        Empty
        (]
        }{
*/

class Stack {
    constructor() {
        this.array = [];
    }

    add(value) {
        this.array.push(value);
    }

    pop() {
        if(this.array.length === 0 )
            throw new Error('Empty stack');

        return this.array.pop();
    }

    length () {
        return this.array.length;
    }
}

class ValidParentheses {
    constructor() {
        this.stack = new Stack();
        this.pair = {
            '{': '}',
            '[': ']',
            '(': ')'
        } // TODO -> can be a Map
    }

    handleChar(char) {
        if(char === '{' || char === '[' || char === '(')
            this.#add(char);
        else
            this.#remove(char); //TODO check if chacter is valid close parentheses
    }

    #add(char) {
        this.stack.add(char);
    }

    #remove(closeChar) {
        const openChar = this.stack.pop();

        if(this.pair[openChar] !== closeChar)
            throw new Error ('Close pair is different than open');
    }

    allParenthesesValid() {
        return this.stack.length() === 0;
    }
}

var isValid = function(s) {
    const valid = new ValidParentheses();

    try {
       for(const parentheses of s) {
            valid.handleChar(parentheses);
        }
    } catch (e) {
        console.log('error: ', e);
        return false;
    }

    return valid.allParenthesesValid();
};
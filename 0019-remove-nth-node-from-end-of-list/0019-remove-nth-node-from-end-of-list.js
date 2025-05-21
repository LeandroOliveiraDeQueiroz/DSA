/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 
 f 1 2 3 4 5
       s
           f

 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = {
        next: head
    }

    let fast = slow = dummy;

    for(let i = 0; i < n; i++)
        fast = fast.next;


    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;

    return dummy.next;
};
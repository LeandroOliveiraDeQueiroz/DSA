/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        PriorityQueue<ListNode> heap = new PriorityQueue<>((a,b) -> a.val - b.val);

        for(int i = 0; i < lists.length; i++) {
            if(lists[i] != null)
                heap.add(lists[i]);
        }

        while(!heap.isEmpty()) {
            ListNode node = heap.poll();
            curr.next = node;
            curr = curr.next;

            if(node.next != null)
                heap.add(node.next);

        }
        
        return dummy.next;
    }

}
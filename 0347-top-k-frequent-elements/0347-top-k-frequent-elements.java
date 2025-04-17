class Solution {
    class Element {
        int num;
        int quantity;
        Element(int num, int quantity) {
            this.num = num;
            this.quantity = quantity;
        }
    }
    
    public int[] topKFrequent(int[] nums, int k) {
        PriorityQueue<Element> heap = new PriorityQueue<>((a, b) -> b.quantity - a.quantity);
        HashMap<Integer, Integer> map = new HashMap<>();
        int [] array = new int [k];

        for(int i = 0; i < nums.length; i++) {  // O(n) 
            int num = nums[i];
            int prev = 0;

            if(map.containsKey(num))
                prev = map.get(num);

            map.put(num, prev+1);
        }

        map.forEach((num, quantity) -> {
            Element element = new Element(num, quantity);
            heap.add(element);
        });
        
        int i =0;
        while(i < k && !heap.isEmpty()) {
            array[i] = heap.poll().num;
            i++;
        }

        return array;
    }
}
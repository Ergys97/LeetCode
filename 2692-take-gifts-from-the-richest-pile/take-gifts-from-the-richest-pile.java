class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int gift : gifts) {
            maxHeap.add(gift);
        }

        for (int i = 0; i < k; i++) {
            int maxGifts = maxHeap.poll();
            int remainingGifts = (int) Math.floor(Math.sqrt(maxGifts));
            maxHeap.add(remainingGifts);
        }

        long totalGifts = 0;
        while (!maxHeap.isEmpty()) {
            totalGifts += maxHeap.poll();
        }

        return totalGifts;
    }
}
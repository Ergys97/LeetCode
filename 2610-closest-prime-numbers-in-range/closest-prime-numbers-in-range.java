class Solution {
    public int[] closestPrimes(int left, int right) {
        List<Integer> primes = new ArrayList<>();
        
        for (int num = left; num <= right; num++) {
            if (isPrime(num)) {
                primes.add(num);
            }
        }
        
        if (primes.size() < 2) {
            return new int[]{-1, -1};
        }
        
        int minDiff = Integer.MAX_VALUE;
        int[] result = new int[]{-1, -1};
        
        for (int i = 1; i < primes.size(); i++) {
            int diff = primes.get(i) - primes.get(i - 1);
            if (diff < minDiff) {
                minDiff = diff;
                result[0] = primes.get(i - 1);
                result[1] = primes.get(i);
            }
        }
        
        return result;
    }
    
    private boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        
        if (num <= 3) {
            return true;
        }
        
        if (num % 2 == 0 || num % 3 == 0) {
            return false;
        }
        
        int sqrtNum = (int) Math.sqrt(num);
        for (int i = 5; i <= sqrtNum; i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
        }
        
        return true;
    }
}
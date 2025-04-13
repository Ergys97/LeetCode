class Solution:
    def countGoodNumbers(self, n: int) -> int:
        MOD = 10**9 + 7
        
        # Helper function to compute modular exponentiation
        def power(base: int, exp: int, mod: int) -> int:
            result = 1
            while exp > 0:
                # If the current exponent bit is set, multiply the result by the base
                if exp % 2 == 1:
                    result = (result * base) % mod
                # Square the base and reduce the exponent by half
                base = (base * base) % mod
                exp //= 2
            return result
        
        # Calculate the number of even and odd positions
        even_positions = (n + 1) // 2  # ceil(n / 2)
        odd_positions = n // 2         # floor(n / 2)
        
        # Compute the result
        return (power(5, even_positions, MOD) * power(4, odd_positions, MOD)) % MOD
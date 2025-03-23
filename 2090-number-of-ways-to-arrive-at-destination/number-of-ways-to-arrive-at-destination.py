class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        graph = [[] for _ in range(n)]
        for u, v, time in roads:
            graph[u].append((v, time))
            graph[v].append((u, time))
        
        dist = [float('inf')] * n
        dist[0] = 0
        ways = [0] * n
        ways[0] = 1
        MOD = 10**9 + 7
        
        import heapq
        pq = [(0, 0)]
        
        while pq:
            time, node = heapq.heappop(pq)
            
            if time > dist[node]:
                continue
            
            for neighbor, edge_time in graph[node]:
                new_time = time + edge_time
                
                if new_time < dist[neighbor]:
                    dist[neighbor] = new_time
                    ways[neighbor] = ways[node]
                    heapq.heappush(pq, (new_time, neighbor))
                    
                elif new_time == dist[neighbor]:
                    ways[neighbor] = (ways[neighbor] + ways[node]) % MOD
        
        return ways[n-1]
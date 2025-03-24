class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        filtered_meetings = [(max(1, start), min(days, end)) 
                            for start, end in meetings 
                            if start <= days and end >= 1]
        
        if not filtered_meetings:
            return days
        
        filtered_meetings.sort()
        
        merged_meetings = [filtered_meetings[0]]
        
        for start, end in filtered_meetings[1:]:
            last_start, last_end = merged_meetings[-1]
            
            if start <= last_end + 1:
                merged_meetings[-1] = (last_start, max(last_end, end))
            else:
                merged_meetings.append((start, end))
        
        busy_days = sum(end - start + 1 for start, end in merged_meetings)
        
        return days - busy_days
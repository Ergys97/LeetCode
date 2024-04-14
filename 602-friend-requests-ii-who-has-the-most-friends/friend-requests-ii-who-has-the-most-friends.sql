SELECT id, num
FROM (
    SELECT id, COUNT(*) AS num
    FROM (
        SELECT requester_id AS id
        FROM RequestAccepted
        UNION ALL
        SELECT accepter_id AS id
        FROM RequestAccepted
    ) AS Friends
    GROUP BY id
) AS Counts
WHERE num = (
    SELECT MAX(num)
    FROM (
        SELECT COUNT(*) AS num
        FROM (
            SELECT requester_id AS id
            FROM RequestAccepted
            UNION ALL
            SELECT accepter_id AS id
            FROM RequestAccepted
        ) AS Friends
        GROUP BY id
    ) AS Counts
);
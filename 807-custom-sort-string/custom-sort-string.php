class Solution {

    /**
     * @param String $order
     * @param String $s
     * @return String
     */
    function customSortString($order, $s) {
        $orderMap = [];
    for($i = 0; $i < strlen($order); $i++) {
        $orderMap[$order[$i]] = $i;
    }
    $s = str_split($s);
    usort($s, function($a, $b) use ($orderMap, $order) {
        $aOrder = isset($orderMap[$a]) ? $orderMap[$a] : strlen($order);
        $bOrder = isset($orderMap[$b]) ? $orderMap[$b] : strlen($order);
        return $aOrder - $bOrder;
    });
    return implode('', $s);
    }
}
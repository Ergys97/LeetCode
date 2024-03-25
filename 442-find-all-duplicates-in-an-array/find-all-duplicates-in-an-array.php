class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDuplicates($nums) {
        $res = [];
    for($i = 0; $i < count($nums); $i++) {
        $num = abs($nums[$i]);
        if($nums[$num - 1] < 0) {
            array_push($res, $num);
        } else {
            $nums[$num - 1] *= -1;
        }
    }
    return $res;
    }
}
const nums = [1, 1, 0, 1, 1, 1];
let maxSq = 0;
let currSq = 0;
const getMaxSeq = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currSq++;
            if (currSq > maxSq) {
                maxSq = currSq;
            }
        } else {
            currSq = 0;
        }
    }
    return maxSq;
}
console.log(getMaxSeq(nums));
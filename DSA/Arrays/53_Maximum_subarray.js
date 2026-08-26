const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maximumSubArraySum = (nums) => {
    if (!nums || nums?.length === 0) return [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;
        for (let j = i; j < nums.length; j++) {
            currSum += nums[j];
            if (currSum > max) {
                max = currSum;
            }
        }

    }
    return max;
}

let ans = maximumSubArraySum(nums);
console.log(ans);

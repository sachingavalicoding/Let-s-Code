const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// O(n^2)
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

// O(n)

const subArraySum = (arr) => {
    let res = arr[0]; // 
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
}
let ans = maximumSubArraySum(nums);
let ans2 = subArraySum(nums);
console.log(ans2);

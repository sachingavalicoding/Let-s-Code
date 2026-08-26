let n = 5;
const nums = [];
for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            row.push(1);
        } else {
            row.push(nums[i - 1][j - 1] + nums[i - 1][j])
        }
    }
    nums.push(row);
    row = [];
}

console.log(nums);
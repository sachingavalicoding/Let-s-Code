const nums = [2, 5, 1, 3, 4, 7], n = 3;
let result = [];
for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[n + i])
}
console.log(result, "result");


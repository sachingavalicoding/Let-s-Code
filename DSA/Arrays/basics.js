const nums = [1, 2, 3, 4];
let array = new Array(5, 6, 7, 8);


function findLargestNum(nums) {
    if (!nums?.length) return 0;
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (largest < nums[i]) {
            largest = nums[i];
        }
    }
    return largest;
}

function findSmallestNum(nums) {
    let smallest = nums.at(-1);
    for (let i = nums.length - 2; i >= 0; i--) {
        if (smallest > nums[i]) {
            smallest = nums[i];
        }
    }
    return smallest;
}

function countOccurrences(nums, target) {
    let counter = 0;
    for (const i of nums) {
        if (i === target) counter++;
    }
    return counter;
}
// 5,6,7,8
function reverseArray(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let temp = nums[low]; // 5
        nums[low++] = nums[high]; // 8
        nums[high--] = temp; // 5
    }
    return nums;
}
function moveZeroes(nums) {
    let nonZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZero++] = nums[i]
        }
    }
    // move remaining positions to 0
    while (nonZero < nums.length) {
        nums[nonZero++] = 0
    }
    return nums;
}
function removeDuplicates(nums = [1, 1, 2, 2, 3, 4, 4, 5]) {
    let result = [];
    for (let i of nums) {
        if (!result.includes(i)) {
            result.push(i)
        }
    }
    return result;
}
function removeDuplicates1(nums) {
    let result = [];
    let lastPushElement;
    for (let i = 0; i < nums.length; i++) {
        if (!lastPushElement) {
            if (nums[i] === nums[i + 1]) {
                lastPushElement = nums[i];
                result.push(nums[i]);
            }
        } else {
            if (lastPushElement === nums[i] && nums[i] === nums[i + 1]) {
                continue;
            }
            else if (nums[i] === nums[i + 1]) {
                result.push(nums[i]);
                lastPushElement = nums[i];
            } else {
                if (lastPushElement !== nums[i] && nums[i] !== nums[i + 1]) {
                    result.push(nums[i]);
                    lastPushElement = nums[i];
                }
                continue;
            }
        }
    }
    console.log(result);
    return result;
}
const removeDuplicates2 = (nums) => {
    let duplicateMapper = new Map();
    for (const num of nums) {
        if (!duplicateMapper.has(num)) {
            duplicateMapper.set(num, num)
        }
    }
    return duplicateMapper.entries();
}

const removeDuplicates3 = (nums) => {
    return new Set(nums);
}

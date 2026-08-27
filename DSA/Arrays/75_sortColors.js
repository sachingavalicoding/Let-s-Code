// solution 1
const sortColors = function (nums) {
    // sol1 in build function
    // return nums.sort((a, b) => a - b);

    // bubble sort 
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length - 1 - i; j++) {
    //         if (nums[j] > nums[j + 1]) {
    //             let temp = nums[j];
    //             nums[j] = nums[j + 1];
    //             nums[j + 1] = temp;
    //         }
    //     }
    // }
    // return nums;
    // count number of 0s,1s and 2s

    // let countes = {
    //     0: 0,
    //     1: 0,
    //     2: 0,
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     countes[nums[i]] += 1;
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     if (countes[0] != 0) {
    //         nums[i] = 0;
    //         countes[0] -= 1;
    //     } else if (countes[1] != 0) {
    //         nums[i] = 1;
    //         countes[1] -= 1;
    //     } else {
    //         nums[i] = 2;
    //         countes[2] -= 1;
    //     }
    // }

    // three pointer 

    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    let temp;
    while (mid <= high) {
        if (nums[mid] === 0) {
            temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] === 2) {
            temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        } else {
            mid++;
        }
    }
    return nums;
};



const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
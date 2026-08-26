const setMaxtrixZeros = (nums) => {
    let rowsLen = nums.length;
    let colsLen = nums[0].length;
    let rows = new Array(rowsLen).fill(false);
    let cols = new Array(colsLen).fill(false);

    for (let i = 0; i < rowsLen; i++) {
        for (let j = 0; j < colsLen; j++) {
            if (nums[i][j] === 0) {
                rows[i] = true;
                cols[i] = true;
            }
        }
    }
    for (let i = 0; i < rowsLen; i++) {
        for (let j = 0; j < colsLen; j++) {
            if (rows[i] || rows[j]) {
                nums[i][j] = 0;
            }
        }
    }
    return nums;
}

console.log(setMaxtrixZeros([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));

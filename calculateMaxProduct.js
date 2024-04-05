// Description: This file contains the logic to calculate the maximum product of three numbers in an array.
function calculateMaxProduct(nums) {
    // Ensure there are at least three numbers in the array.
    let error = "Array needs at least three numbers and not contain characters";
    if (nums.length < 3 || nums.some(num => typeof num !== 'number')) {return error}

    // Sort the numbers in ascending order to simplify finding the needed values.
    nums.sort((a, b) => a - b);
    const n = nums.length;
    // The maximum product can be achieved in one of three ways:
    // 1. The product of the three largest numbers.
    // 2. The product of the two smallest (most negative) numbers and the largest number.
    // 3. If there are zeros and positive numbers but less than 3 positives, the product is zero.
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Three largest numbers.
    const product2 = nums[0] * nums[1] * nums[n - 1]; // Two smallest and one largest number.
    // Return the maximum of these two products.
    return Math.max(product1, product2);
}


module.exports = calculateMaxProduct;
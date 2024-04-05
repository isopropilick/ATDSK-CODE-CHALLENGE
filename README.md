# ATDSK-CODE-CHALLENGE
On this repo I will advance forward with the number one,  as implementing a solution for this problem in JavaScript  can demonstrate a good grasp of coding skills and requires careful consideration of edge cases.

# Contents
1. [Problem](#problem)
2. [Solution](#solution)
   1. [Logic](#logic)
   2. [Test cases](#test-cases)
5. [How to run the test](#how-to-run-the-test)
6. [CI/CD](#ci/cd)
7. [Live Demo](#live-demo)


# Problem
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

>Example 1:
> 
>Input: nums = [3,2,3,4]
> 
>Output: 36
> 
>Explanation: Maximum product it can be achieved is 36 (3*3*4)

>Example 2:
> 
>Input: nums = [-3, -100, -52, 3 , 4, 1]
> 
>Output: 20800 
> 
>Explanation: Maximum product it can be achieved is 20800 ( -100 * -52 * 4)

# Solution
The solution to this problem is to sort the array and then return the maximum of the product of the last three elements or the product of the first two elements and the last element. This is because the product of the first two elements and the last element can be greater than the product of the last three elements if the first two elements are negative. 

## Logic (in calculateMaxProduct.js)
```javascript
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
```

## Test cases (in Jest located in calculateMaxProduct.test.js)
```javascript
const calc = require('./calculateMaxProduct');
let server;
let error = "Array needs at least three numbers and not contain characters";
let numericCases = [
    { input: [1,2,3], expected: 6 , name: '3 positive numbers'},
    { input: [-1,-2,-3], expected: -6 , name: '3 negative numbers'},
    { input: [-1,2,3], expected: -6 , name: 'One negative number and two positive numbers'},
    { input: [1,-2,-3], expected: 6 , name: 'Two negative numbers and one positive number'},
    { input: [-100,-100,5,2], expected: 50000 , name: 'Two big negative numbers and two positive numbers'},
    { input: [0,-1,2,3], expected: 0 , name: 'Zero, one negative number and two positive numbers'},
    { input: [1,10,-5,-6,-10,2], expected: 600 , name: 'Three negative numbers and three positive numbers'},
    { input: [1,2], expected: error , name: 'Error for two numbers'},
    { input: [], expected: error , name: 'Error for empty array'},
    { input: [1,2,3,4,5,6,7,8,9,10], expected: 720 , name: '10 positive numbers'},
    { input: [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], expected: -6 , name: '10 negative numbers'},
    { input: ['a','b','c'], expected: error , name: 'Error for string array'},
    { input: [1,2,'c'], expected: error , name: 'Error for mixed array'},
    { input: ['a','b',1,2,3], expected: error , name: 'Error for mixed array'},
];
describe('calc', () => {
    for (let i = 0; i < numericCases.length; i++) {
        const { input, expected, name } = numericCases[i];
        test(name, () => {expect(calc(input)).toBe(expected);});
    }
});
```

# How to run the test
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm test` to run the test cases

# CI/CD
I have set up a simple docker/jenkins pipeline to automate the testing process. The pipeline is defined in the Jenkinsfile and it is triggered when a new commit is pushed to the repository. The pipeline runs the test cases and reports the results. The pipeline is defined in the Jenkinsfile and it is triggered when a new commit is pushed to the repository. The pipeline runs the test cases and reports the results.
![Screenshot4.png](https://github.com/isopropilick/ATDSK-CODE-CHALLENGE/Screenshot%202024-04-05%20163145.png)
![Screenshot0.png](https://github.com/isopropilick/ATDSK-CODE-CHALLENGE/Screenshot%202024-04-05%20163205.png)
![Screenshot1.png](https://github.com/isopropilick/ATDSK-CODE-CHALLENGE/Screenshot%202024-04-05%20163212.png)
![Screenshot2.png](https://github.com/isopropilick/ATDSK-CODE-CHALLENGE/Screenshot%202024-04-05%20163224.png)

# Live Demo
The pipeline is runing in my local homelab, you can see the results in the following link: https://autodesk-challenge.ericpereyra.com/
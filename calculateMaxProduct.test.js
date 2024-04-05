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
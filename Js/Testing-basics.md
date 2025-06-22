# Testing Basics
TDD  : Test Driven Development is a new way of developing where we write down tests for our code to fail before writing the actual production ready code so we can design and organizee and visualise our code before writing it. It helps us write clean code that works. 
We add a test --> run it --> if it fails we make some changes and test and run again otherwise we do some other tests if it passes and finally we are done with our code 
- it helps slow down and take a breather and let us get confidence
- Solving bugs
- Saves us debugging time
- safety net
- eliminates waste
- clean code
- etc.
# Getting started
There are many different Js libraries like jest , mocha , jasmine ,Tape etc. For this course we use Jest. 
1. Install Jest using `npm i -D jest`
2. Update package.json
```
"scripts" :{
  test:"jest"
}
```
3. Write your code in a file and test it in another file , example :
```
//code for sum function
function sum(a,b){
  return a+b;
}
module.exports=sum;

//test code
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
## Matchers
1. expect().toBe() : exact equality
2. expect().toEqual() : equality of value
3. expect().not.toBe(0); : checks inequality
4. toBeNull :  matches only null
5. toBeUndefined :  matches only undefined
6. toBeDefined :  is the opposite of toBeUndefined
7. toBeTruthy : matches anything that an if statement treats as true
8. toBeFalsy :  matches anything that an if statement treats as false
9. expect(value).toBeGreaterThan(3);
10. expect(value).toBeGreaterThanOrEqual(3.5);
11. expect(value).toBeLessThan(5);
12. expect(value).toBeLessThanOrEqual(4.5);
13. expect(value).toBe(4);
14. expect(value).toEqual(4);
etc.
# Assignment 
Q. Code to capitalise 1st letter of input string
```
//index.js file
function Cap(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports='Cap';

//test.js file
const Cap=require("./index.js");
test ('first letter should be Capital' , ()=>{
  console.log(Cap("hello")).toBe("Hello");
  console.log(Cap("twinkle")).toBe("Twinkle");
)};
```
Q. A reverse string function 
```
//index.js file
function Reverse(string){
  return string.split('').reverse().join('');
}
module.exports=Reverse;

//test.js file
const Rev=require("./index.js");
test('return the string reversed' , ()=>{
  console.log(Rev("hello")).toBe("olleh");
  console.log(Rev("Twinkle")).toBe("elkniwT");
});
```
Q. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
```
//index.js file
function Calc(a,b){
  return {
    add : ()=>{a+b},
    multiply:()=>{a*b},
    divide:()=>{a/b},
    subtract:()=>{a-b},
  };
};
module.export=Calc;

//test.js file
const Calc=require("./index.js");
test('calculator works correctly',()=>{
  const result=Calc(2,2);
  console.log(result.add()).toBe(4);
  console.log(result.subtract()).toBe(0);
  console.log(result.multiply()).toBe(4);
  console.log(result.divide()).toBe(1);
}; 
```
Q. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
```
//index.js file
function analyzeArray(array){
    return {
        avg:()=>{
            let sum=0;
            array.forEach((i)=>{
                 sum+=i;
            });
            return sum/array.length;
        },
        min:()=>{
            let min=array[0];
            for(let i=0;i<array.length;i++){
                if(array[i]<min){
                    min=array[i];
                }
            }
            return min;
        },
        max:()=>{
            let max=array[0];
            for(let i=0;i<array.length;i++){
                if(array[i]>max){
                    max=array[i];
                }
            }
            return max;
        },
        length:()=>{return array.length;}
    };
};
module.exports=analyzeArray;

//test.js file
const analyzeArray = require('./index');

test('analyse array to return stats', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result.avg()).toBe(4);
    expect(result.min()).toBe(1);
    expect(result.max()).toBe(8);
    expect(result.length()).toBe(6);
});

```

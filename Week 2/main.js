/*
Surname     |Firstname  |email                        | Contribution% | Any issues?
====================================================================================
Voogd       |Oliver     |ovoo0001@student.monash.edu  | 25%           |
Tjin        |Stephanie  |stji0001@student.monash.edu  | 25%           |
Leow        |Enoch      |eleo0010@student.monash.edu  | 25%           |
Djeric      |Ethan      |edje0001@student.monash.edu  | 25%           |
*/

// complete Worksheet 2 by entering code in the places marked below...
//
// For full instructions and tests open the file worksheetChecklist.html
// in Chrome browser.  Keep it open side-by-side with your editor window.
// You will edit this file (main.js), save it, and reload the
// browser window to run the test.

/**
 * Exercise 1
 */

const myObj = {
}

myObj.aProperty = "string"
myObj.anotherProperty = 1


/**
 * Exercise 2
 */
 function operationOnTwoNumbers(f) {
	return (x) => (y) => f(x, y)
}


/**
 * Exercise 3
 */

function callEach(array) {
    array.forEach(func => func());
}

/**
 * Exercise 4
 */

function addN(n, array) {
    //const addition = operationOnTwoNumbers((x, y) => x+y)
    //const addn = add(n)
    return array.map(element => element + n)
}

function getEvens(array) {
    return array.filter(element => element % 2 === 0)
}

function multiplyArray(array) {
    const noZeroes = array.filter(element => element)
    
    return noZeroes.reduce((x, y) => x * y);
}

/**
 * Exercise 5
 */

function range(n) { 
    if (n === 0) { return []; }
    let recurRange = (arr) => arr[0] >= 1 ? recurRange([arr[0]-1]).concat(arr) : arr;
    return recurRange([n-1])
}

/**
 * Exercise 6
 */

function Euler1() {
    let reduceToMultiples = (sum, current) => { 
        if ((current % 3 === 0) || (current % 5 === 0)) {  return sum += current;  }
        return sum;
    };
    return range(1000).reduce(reduceToMultiples, 0);
}

/**
 * Exercise 7
 */
function infinite_series_calculator(accumulate) {
	return (predicate) => 
		(transform) => 
		(n) => 
		range(n).map(transform).filter(predicate).reduce(accumulate)
}


/**
 * Exercise 8
 */

function calculatePiTerm(n) {
    return ((4*n**2)/((4*n**2)-1))
}

function skipZero(n){
    return n !== 0
}

function productAccumulate(x, y) {
    return x*y
}

function calculatePi (n) {
    return 2*(infinite_series_calculator(productAccumulate)(skipZero)(calculatePiTerm)(n))
}

const pi = calculatePi(100)

/**
 * Exercise 9
 */
 function factorial(n) {
    return n !== 1 ? n * factorial(n-1) : 1
}

function calculateETerm(n) {
    return (2*(n+1)) / factorial((2*n)+1)
}

function sumAccumulate(x, y) {
    return x + y
}

function alwaysTrue(n) {
    return true
}

function sum_series_calculator(transform) {
    return infinite_series_calculator(sumAccumulate)(alwaysTrue)(transform);
}

function calculateE(n) {
    return sum_series_calculator(calculateETerm)(n);
}

const e = calculateE(100)

/**
 * Exercise 10
 */

 function calculateSinTerm(x) {
    return (n) => (((-1)**n)*(x**(2*n+1))) / factorial((2*n)+1)
}


function sin(x) {
    const sin_of_x = calculateSinTerm(x)
    return sum_series_calculator(sin_of_x)(100)
}


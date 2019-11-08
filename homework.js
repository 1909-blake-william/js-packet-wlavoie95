// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 1);
    }
}


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    let isSorted;
    let toSwap;
    for (let i = 0; i < numArray.length; i++) {
        isSorted = true;
        for (let j = 0; j < numArray.length - 1 - i; j++) {
            let one = numArray[j];
            let two = numArray[j + 1];
            if (one > two) {
                numArray[j] = two;
                numArray[j + 1] = one;
                isSorted = false;
            }
        }
        if (isSorted) {
            return numArray;
        }
    }
    return numArray;
}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let result = '';
    for (let i = someStr.length - 1; i >= 0; i--) {
        result += someStr.charAt(i);
    }
    return result;
}


// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum === 1) {
        return 1;
    }
    return someNum * factorial(someNum - 1);
}


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    let result = '';
    let endpoint = length + offset;
    if (length === 0) { // offset would not matter since the output will always be an empty string
        return result;
    } else if (endpoint > someStr.length) {
        alert(`Desired substring would cause IndexOutOfBounds Error!`);
    } else if(length < 0) {
        alert('Must specify a length greater than or equal to zero!');
    } else { 
        for (let index = offset; index < endpoint; index++) {
          result += someStr.charAt(index);
        }
        return result;
    }
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum) {
    let stringNum = someNum.toString();
    let evenNums = ['0', '2', '4', '6', '8']

    if (evenNums.includes(stringNum.charAt(stringNum.length - 1))) {
        return true;
    } else {
        return false;
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let reverseSomeStr = reverseStr(someStr);
    if (someStr === reverseSomeStr) {
        return true;
    } else {
        return false;
    }
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *


function printShape(shape, height, character) {
    const space = " ";
    if (shape === "Square") {
        let output = "";
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < height; col++) {
                output += character;
            }
            if (row < height - 1) {
                output += '\n';
            }
        }
        console.log(output);
    }

    if (shape === "Triangle") {
        let output = "";
        for (let row = 0; row < height; row++) {
            for (let col = 0; col <= row; row++) {
                output += character;
            }
            output += '\n';
        }
        console.log(output);
    }


    if (shape === "Diamond") {
        let middle = (height - 1) / 2;
        let variation = 0;
        let output = "";
        for (let row = 0; row < height; row++) {

            for (let col = 0; col < height; col++) {
                if (col >= (middle - variation) && col <= (middle + variation)) {
                    output += character;
                } else {
                    output += space;
                }
            }
            output += '\n';
            variation = (row >= middle) ? variation - 1 : variation + 1;

        }
        console.log(output);
    }

}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    for(let prop in someObj){
        console.log(someObj[prop]);
    }
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2,1);
    console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age) { // may need to rewrite
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);
console.log(john);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
function getPerson(name, age){
    return {name, age};
}

console.log(getPerson('John', 30));

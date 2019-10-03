// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a, b) {

    let sum = a + b;

    return sum.toString(2);

}

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumTwoSmallestNumbers = (numbers) => {
    let sortedArray = numbers.sort((a, b) => { return a - b })
    return sortedArray[0] + sortedArray[1]
}

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const order = (words) => {
    let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let splittedWords = words.split(' ');
    let resultArray = []
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < splittedWords.length; j++) {
            if (splittedWords[j].includes(numArray[i])) {
                resultArray.push(splittedWords[j]);
            }
        }
    }

    return resultArray.join(' ');
}

function order2(words) {

    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let splittedAndSortedArray = s.split(' ').sort((a, b) => {
        return a.length - b.length
    })

    return splittedAndSortedArray[0].length;
}

function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}


// check if the given value is empty or not 
const isEmpty = value => {
    return (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim().length === 0) ||
        (typeof value === 'object' && Object.keys(value).length === 0)
    )
}


console.log(isEmpty(88));

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    let squared = Math.sqrt(sq);
    let nextPerfectSquare;
    console.log(squared)

    if (Number.isInteger(squared)) {
        nextPerfectSquare = (squared + 1) ** 2;
        return nextPerfectSquare;
    }
    return -1;
}

console.log(findNextSquare(16))


// game logic 
// creating a fighter constructor 

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    if (fac1 < fac2) {
        return fighter2.name;
    } else if (fac2 < fac1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}

/* console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); //, "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); //, "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")); //, "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")); //, "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")); //, "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")); //, "Harald"*/

// function deleteNth(arr, n) {
//     // ...
//     let resultArray = []
//     let count = 0;
//     let i = 0

//     const newArray = arr.filter((value, index) => {
//         return indexOf(value) <= n
//     })

//     console.log(newArray)
// }

// console.log(deleteNth([1, 1, 1, 1], 2))


// Interview question 

// Create a function that takes two or more arrays and returns an array of the symmetric difference (△or ⊕) of the provided arrays.



function sumAll(...args) {

    // for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i])
    //}

    console.log(args)
}

sumAll(1, 2, 3)

const nums = [1, 2, 3, 4, 5]

const addNumbers = (a, b) => {

    return a + b

}

const sum = nums.reduce(addNumbers)

console.log(sum)




function sym() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    function symDiff(arrayOne, arrayTwo) {
        console.log(arrayOne)
        var result = [];

        arrayOne.forEach(function (item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function (item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

//console.log(sym([1, 2, 3], [5, 2, 1, 4]))
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))


// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory ////// item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array // // should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let index;
    let oldItemNames = []
    let newItemNames = []

    // if name of the new inventory matches update the number of items
    arr1.map((item1) => {

        return arr2.map((item2) => {
            if (item1[1] === item2[1]) {
                item1[0] = item1[0] + item2[0]
            }
        })
    })

    // now we need to check if the item exists in the inventory

    // get the name in arr1
    arr1.map((item) => {
        oldItemNames.push(item[1])
    })

    // get the names in arr2
    arr2.map((item) => {
        newItemNames.push(item[1])
    })

    // check if the names of new inventory match old 
    newItemNames.map((name) => {
        if (oldItemNames.indexOf(name) === -1) {
            index = newItemNames.indexOf(name)
            arr1.push(arr2[index])
        }
    })

    // sort the old inventory according the name 

    arr1.sort((a, b) => {
        return a[1] > b[1] ? 1 : -1
    })

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));


// Bubble sort 

function bubbleSort(array) {
    // change code below this line
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {

            if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]]

        }

        // change code above this line
    }
    return array;
}

//testing 
let randi = [2, 5, 3, 4, 1]
let test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bubbleSort(test))
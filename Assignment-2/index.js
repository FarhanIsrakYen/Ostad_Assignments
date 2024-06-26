function calculateSum(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

function findMax(arr) {
    return Math.max(...arr);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function sumArray(arr) {
    return arr.reduce((prev, next) => prev + next);;
}

function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(calculateSum(100, 50));
console.log(isEven(422));
console.log(isEven(723));
console.log(findMax([10, 20, 30, 40, 50]));
console.log(reverseString("hello"));
console.log(filterOddNumbers([11, 22, 33, 44, 55]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sortArray([5, 3, 8, 1, 2]));
console.log(capitalizeFirstLetter("hello"));

/* ------------ DZ WEEK 3 ------------- */

// task 1 

function calculateSum(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
}

let from = parseInt(prompt("From"));
let to = parseInt(prompt("To"));

console.log(`Sum numbers from ${from} to ${to} = ${calculateSum(from, to)}`);

// task 2

function mostCommonDevider(a, b) {
    let i = a > b ? a : b;

    while (true) {
        if (a % i == 0 && b % i == 0)
            break;
        i--;
    }

    return i;
}

let num1 = parseInt(prompt("First number"));
let num2 = parseInt(prompt("Second number"));

console.log("Most common devider = " + mostCommonDevider(num1, num2));

// task 3

function devidersOf(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) 
        if (num % i == 0) 
            arr.push(i);

    return arr;
}

let num = parseInt(prompt("Enter a number"));
console.log(`Deviders of ${num} is ${devidersOf(num)}`);

// task 4

function numbersCount(num) {
    let n = num + "";
    return n.length;
}

let n = parseInt(prompt("Enter a number to calculate count of numbers in it"));
console.log(`Count of numbers in ${n} is ${numbersCount(n)}`);

// task 5

function enterTenNumbersPls() {
    let poss = 0;
    let negs = 0;
    let zeros = 0;
    let evens = 0;
    let odds = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt("Enter number #" + i));

        if (num > 0)
            poss++;
        else if (num < 0)
            negs++;
        else
            zeros++;

        if (num % 2 == 0)
            evens++;
        else
            odds++;
    }

    alert(`positives: ${poss}; negatives: ${negs}; zeros: ${zeros}; evens: ${evens}; odds: ${odds}`);
}

enterTenNumbersPls();

// task 6

function loopingCalculator() {
    do 
    {
        let num1 = parseFloat(prompt("Число 1"));
        let opp = prompt("Операция (+ - * /)");
        let num2 = parseFloat(prompt("Число 2"));

        let res;

        switch(opp)
        {
            case "+": res = num1 + num2; break;
            case "-": res = num1 - num2; break;
            case "*": res = num1 * num2; break;
            case "/": res = num1 / num2; break;
        }

        alert(`${num1} ${opp} ${num2} = ${res}`);

    } while(confirm("Еще разик посчитаем?"));
}

loopingCalculator();

// task 7

function shiftNumbers(n, shift) { // 123456
    let arr = []; // [4,5,6,1,2,3]
    let num = n + ""; // "123456"

    for (var i = 0; i < num.length; i++) arr.push(num[i]);

    for (let i = 0; i < shift; i++) arr.push(arr[i]);
    for (let i = 0; i < shift; i++) arr.shift();        

    return arr;
}

let number = parseInt(prompt("Enter a number"));
let shift = parseInt(prompt("Shift on"));

alert(shiftNumbers(number, shift));

// task 8

function loopingDaysOfWeek() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    do
    {
        alert(days[0]);
        days.push(days[0]);
        days.shift();
    } while(confirm("Next day?"))
}

loopingDaysOfWeek();

// task 9

function multiplicationTable() {
    for (let i = 2; i <= 9; i++) 
        for (let j = 1; j <= 9; j++) 
            console.log(`${i} * ${j} = ${i * j}`);           
}

multiplicationTable();

// task 10

let numByUser = prompt("Число загадай (от 0 до 100)");

function guessTheNumber(left, right) {
    let middle = parseInt((left + right) / 2);

    if(confirm(`Ваше число ${middle}?`)) 
        return "NASHEL";

    let isMore = confirm(`Ваше число больше, чем ${middle}`);

    if (isMore) {
        return guessTheNumber(middle, right)
    } else {
        return guessTheNumber(left, middle)
    }
     
}

alert(guessTheNumber(0, 100));

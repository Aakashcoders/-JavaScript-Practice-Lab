// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

console.log("Sum Array")

const arr = [15, 7, 8, -3, 9];
let sum = 0;


function sumnagtive(number){
    let sum = 0;

    for (let num of number){
        if(num < 0){
            break;
        }
        sum  = sum + num
    }
    return sum
}

const number  = [6, 8, 9, -2, 50]

console.log(sumnagtive(number))

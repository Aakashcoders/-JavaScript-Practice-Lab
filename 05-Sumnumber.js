// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

console.log("Sum Array")

const arr = [15, 7, 8, -3, 9];
let sum = 0;
// if(arr.length < 0){
//     // console.log(sum(...arr))
//     console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
// }
// function sum(){
//     console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
// }


// for(sum() of arr){
//     console.log(sum)
//     if(sum < 0){
//         console.log(sum)
//         break;
//     }
// }

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
// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// let vowal = "a, e, i, o, u, y"
// console.log(vowalcount(vowal))

// function vowalcount(vowal){
//     for(let count of vowal){
//         console.log(count)
//     }
// }


function vowalount(str){
    let count  = 0;

     let vowal = "auioeAUIOE";
    for(let char of str){
       if(vowal.includes(char)){
        count++;
       }
    
    }
    return count;
}

console.log(vowalount("Programming"))
console.log(vowalount("Hellooo world!"))
// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
// async function arrcountM(str){
//     let newarr = 0;
//     new Promise(resolve, reject){
//         str.map("arrs", newarr)
//     }
// }


async function arrcount(number) {
    let totalcount = number.map(async (num) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return num * 2;
    });


    let totalcountes = await Promise.all(totalcount);
    console.log(totalcountes)
}
let arr = [2, 4, 6, 8, 2, 5, 8]

arrcount(arr).then((result) => {
    console.log(result)

   
})


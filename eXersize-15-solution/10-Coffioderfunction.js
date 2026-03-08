console.log("Coffimashine order function JS")

// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(type){
    console.log( `${type} is make Please wait now `);
    let delay = Math.floor(Math.random() *2000) +1000;
    return new Promise((resolve) =>{
           setTimeout(() =>{
              resolve(`Your ${type} Coffee are read! Yah ${delay}ms Lga`);
           },delay);
    });
}

async function order(){
    let result = await brewCoffee("Cappuccino");
    console.log(result)
}

order()






// async function brewCoffee(type) {
//     console.log(`${type} बन रही है... कृपया प्रतीक्षा करें।`);

//     return new Promise((resolve) => {
//         // 1 से 4 सेकंड के बीच रैंडम समय चुनना
//         const processTime = Math.floor(Math.random() * 3000) + 1000;

//         setTimeout(() => {
//             // काम पूरा होने पर 'resolve' करना
//             resolve(`आपकी ${type} तैयार है! (समय लगा: ${processTime}ms)`);
//         }, processTime);
//     });
// }

// // फंक्शन का उपयोग करने का तरीका
// async function order() {
//     const result = await brewCoffee("Cappuccino");
//     console.log(result);
// }

// order();

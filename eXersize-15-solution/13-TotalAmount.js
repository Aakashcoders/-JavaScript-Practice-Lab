// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

console.log("Total Amount function ")

const card = [
    {name : "laptop", price : 85000, quantity : 1},
    {name : "phone", price : 14500, quantity : 1},
    {name : "Mouse", price : 200, quantity : 2},
    {name : "keybord", price : 250, quantity : 2},
    {name : "USB/cable", price : 300, quantity : 4}
];


// function calculateTotal(cardt){
//     return cardt.reduce((total, item)=>{
//         return total + (item.price * item.quantity)
//     }, 1);
// }

// single line function

const  calculateTotal = (cardt) => cardt.reduce((sum, p) => sum + p.price * p.quantity, 0 );
const result = calculateTotal(card);
console.log(result)
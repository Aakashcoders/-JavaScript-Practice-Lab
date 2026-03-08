// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

console.log("This is Search function ");

const product = [
   { id: 1, name: "Samsung Galaxy S26", category: "Electronics", price: 95000 },
    { id: 2, name: "Cotton Kurta", category: "Fashion", price: 1200 },
    { id: 3, name: "MacBook Air M4", category: "Electronics", price: 115000 },
    { id: 4, name: "Leather Wallet", category: "Fashion", price: 800 },
    { id: 5, name: "Wireless Earbuds", category: "Electronics", price: 5000 }
   
];

function filterProducts(Productlist, critirion){
            return Productlist.filter((item) =>{
            return item.category === critirion;
    });
};

const result = filterProducts(product, "Electronics");
console.log("Filter Products", result)




// // 1. प्रोडक्ट्स की एक लिस्ट (Array of Objects)
// const allProducts = [
//     { id: 1, name: "Samsung Galaxy S26", category: "Electronics", price: 95000 },
//     { id: 2, name: "Cotton Kurta", category: "Fashion", price: 1200 },
//     { id: 3, name: "MacBook Air M4", category: "Electronics", price: 115000 },
//     { id: 4, name: "Leather Wallet", category: "Fashion", price: 800 },
//     { id: 5, name: "Wireless Earbuds", category: "Electronics", price: 5000 }
// ];

// /**
//  * 2. filterProducts फंक्शन
//  * @param {Array} products - सामानों की लिस्ट
//  * @param {String} criterion - वो कैटेगरी जिसे हमें ढूँढना है
//  */
// function filterProducts(products, criterion) {
//     // .filter() एरे के हर सामान को चेक करेगा
//     return products.filter((item) => {
//         // अगर आइटम की कैटेगरी हमारे criterion से मैच करती है, तो उसे रख लो
//         return item.category === criterion;
//     });
// }

// // 3. फंक्शन को चलाकर देखना (Usage)
// const electronicsOnly = filterProducts(allProducts, "Electronics");

// console.log("Filtered Products:", electronicsOnly);

let a = prompt("Enetr your Value = ")
let b = prompt("Enter your operation : ")
let c = prompt("Enetr your second value = ")
let random = Math.random() //Returns a pseudorandom number between 0 and 1.
console.log(random)
/* this is ferst method 
if(random > 0.1){
    // perform correct calculation 
    if(b == '+'){
     console.log(`this is value = ${a + c}`);     
    }
    else if(b == '-'){
        console.log(`this is value = ${a - c}`);   
    }
    else if(b == '/'){
        console.log(`this is value = ${a / c}`);   
    }
    else if(b == '*'){
        console.log(`this is value = ${a * c}`);   
    }
    else{
        console.log("Not work")
    }
}
else {  
     // perform wrong calculation
   if(b == '+'){
     console.log(`this is value =  ${a - c}`);     
    }
    else if(b == '-'){
        console.log(`this is value = ${a / c}  `);   
    }
    else if(b == '/'){
        console.log(`this is value = ${a * c}  `);   
    }
    else if(b == '*'){
        console.log(`this is value = ${a + c}  `);   
    }
    else{
        console.log("Not work to")
    }
}

*/

// this is second method 

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}


if(random > 0.1){
    console.log(` the resilt is ${a} ${b} ${c} `)
    alert(`this is result ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b = obj[b]
    alert(`this is result ${eval(`${a} ${b} ${c}`)}`)
}
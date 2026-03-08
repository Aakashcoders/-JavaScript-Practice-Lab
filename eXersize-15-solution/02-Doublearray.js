console.log("Double array Program ")

// let arr = [2, 5, 7, 9, 2, 8, 5, 7, 5, 12, 13]

// let c = arr.map(num => num * 2)  // double using maping 
// console.log(c)

function doubleTrouble(arr) {
  return arr.map((num, i) => {
    // अगर करंट नंबर पिछले नंबर के बराबर है, तो उसे वैसा ही रहने दें
    if (i > 0 && num === arr[i - 1]) {
      return num;
    }
    // वरना डबल कर दें
    return num * 2;
  });
}

// टेस्ट रन:
const input = [1, 2, 2, 3, 4, 4, 4, 5];
const result = doubleTrouble(input);

console.log(result); 
// आउटपुट: [2, 4, 2, 6, 8, 4, 4, 10]
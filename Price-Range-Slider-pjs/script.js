let range_input = document.querySelectorAll('.range-input input') //give the output array fom 
// let result = document.getElementsByTagName('input') //Give me all input detail array

let input_price_container = document.querySelectorAll('.input-price-container input')
let bar = document.querySelector('.bar')
let gap_number = 1000

input_price_container.forEach(elements => {
    elements.addEventListener('input', (e)=>{
        let min_price = parseInt(input_price_container[0].value)
        let max_price = parseInt(input_price_container[1].value)
        if((max_price - min_price) >= gap_number && max_price <= range_input[1].max){
            if(e.target.className === 'min-input'){
                range_input[0].value = min_price
                bar.style.left = ((min_price / range_input[0].max) * 100) + '%'
            }else{
                range_input[1].value = max_price
                bar.style.right = 100 - (max_price / range_input[1].max) * 100 + '%'
            }
        }else{
            console.log('else part')
        }
    })
});

for (const key of range_input) { //give me all html element
    key.addEventListener('input', (e) =>{
        let min_range = parseInt(range_input[0].value)
        let max_range = parseInt(range_input[1].value)

    if((max_range - min_range) < gap_number){
      if(e.target.className === 'min-range'){
         range_input[0].value = max_range - gap_number
      }else{
        range_input[1].value = min_range + gap_number
      }
    }else{
        input_price_container[0].value = min_range
        input_price_container[1].value = max_range
        bar.style.left = ((min_range / range_input[0].max) * 100) + '%'
        bar.style.right = 100- (max_range / range_input[1].max) * 100 + '%'
    }

})
}

//Video :-https://www.youtube.com/watch?v=c_3tKJeXMJk&t=2229s

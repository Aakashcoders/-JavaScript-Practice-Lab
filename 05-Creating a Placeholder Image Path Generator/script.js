let select = document.querySelector('select') //it is called reference lena
let inputall = document.querySelectorAll('input')
let img = document.querySelector('img')
let textarea = document.querySelector('textarea')

// console.log(select, input, img, textarea)

function createImagePath() {
    let textvalue = document.querySelector('#bg_image').value //input ki value
    let bg_color = document.querySelector('#bg_color').value.replace('#', '') //input ki #FF5722 # value repalce kar do ''
    let bg_txtcolor = document.querySelector('#bg_txtcolor').value.replace('#', '')

    let size = select.value.split('x')
    let width = size[0]
    let height = size[1]

    img.style.width = `${width}px`
    img.style.height = `${height}px`

    // img.innerHTML = textvalue Remove Inline Styles: img.innerHTML aur img.style.backgroundColor ko hata do. Ye cheezein API URL ke through handle honi chahiye.
    // img.style.backgroundColor = bg_color
    // img.style.color = bg_txtcolor

    let UrlPath =`https://via.placeholder.com/${select.value}/${bg_color}/${bg_txtcolor}?text=${encodeURIComponent(textvalue)}`; //select output object form 
    
    console.log(UrlPath)
    img.src = UrlPath
    textarea.value = UrlPath
}

/*
The problem is that document.querySelectorAll('input') returns a NodeList (collection of elements), not a single element. You can't call .addEventListener() directly on a NodeList.
You need to loop through each input and add the event listener to each one individually.
Replace this line:
This loops through each <input> element in the NodeList and adds the event listener to each one separately.
Summary:
querySelector() = returns 1 element → can use .addEventListener()
querySelectorAll() = returns NodeList (0 or more

The problem is in your createImagePath() function. It's only using select.value (the image size) but not including the text and colors from the other inputs.
The full placeholder URL format should be:
Get the text input value
Get the background color (remove the # symbol)
Get the text color (remove the # symbol)
Build the complete URL with all parameters
Set the image source
*/
// inputall.addEventListener('change', createImagePath)// with brackit functon are not wait run directliy


inputall.forEach((input) => { return input.addEventListener('change', createImagePath) })
select.addEventListener('change', createImagePath)

// Call function at page load to generate initial image
createImagePath()

// if(createImagePath){
//     console.log('Code are run')
// }else{
//     console.log('Code not run')
// }



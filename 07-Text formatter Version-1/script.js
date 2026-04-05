let txt = document.getElementById('inputbox')

document.getElementsByName('format-option').forEach((element, index)=>{
    // element.addEventListener('click', formtext(index)) without curli brackit formtext not wait click element  directly run best addEvenTListenea second parameter is callback function run 
    element.addEventListener('click', ()=>{
        formtext(index)
    })
})

function formtext(index){
    switch(index){
        case 0: txt.value = txt.value.toUpperCase() //most important check spelling toUpperCase C olbase Capital
        break;
        case 1: txt.value = txt.value.toLowerCase()
        break;
        case 2: txt.value = CapitalizeSentence(txt.value)
        break;
        case 3: txt.value = CapitalizeWord(txt.value)
        break;
    }
}

function RemoveExtraSpace(str){
    let string = str.trim().split(/\s+/) //converd the string into array
     return string.join(' ') //converd the array into string
    //  return str.replace('/\s+/g', ' ').trim()
}

function CapitalizeSentence(str){
    let spacefree = RemoveExtraSpace(str)
    let splitSentence = spacefree.split('. ') //converd the string into array and split .space 
    for(let i = 0 ; i < splitSentence.length; i++){
        splitSentence[i] = splitSentence[i][0].toUpperCase()+splitSentence[i].slice(1) // A + pple return Array
    }
    splitSentence=splitSentence.join(' ') //converd array into string and join with help of space
    return splitSentence
}

function CapitalizeWord(str){
    let splifreeSpace = RemoveExtraSpace(str)
    let splitword = splifreeSpace.split(' ')
    for(let i = 0; i < splitword.length; i++){
        splitword[i]=splitword[i][0].toUpperCase()+splitword[i].slice(1) //Hello + word!
    }
    splitword=splitword.join(' ')//converd array into string and join with help of space
    return splitword
}
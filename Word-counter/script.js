
function getWordCount(str){
    let trimAndsplit = str.trim().split(/\s+/)
    
    if(trimAndsplit == ''){
        return 0
    }
    return trimAndsplit.length;
}

function counter(InputStr){
    let CharCount = 0;
    let AlphCoute = 0;
    let numCoute = 0;
    // let vowalcount = 0;
    // let chackeVowals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
   
    // let result = InputStr.find(vow => vow === chackeVowals)
    // console.log(result)

    for(let i = 0; i < InputStr.length; i++){
        if(InputStr[i]!=' ' && InputStr[i]!='\n'){
            CharCount++ //all charactors spacel charactors ljjjj@##$%%
        }if((InputStr[i]>='a' && InputStr[i]<='z') ||(InputStr[i]>='A' && InputStr[i]<='Z') ){
            AlphCoute++ //chaipital or smallletter all Alphabates
        }else if(InputStr[i]>= '0' && InputStr[i]<= '9'){ // or all InputStr value String form
            numCoute++
        }
    }

    document.getElementById('char').value = CharCount
    document.getElementById('Alpha').value = AlphCoute
    document.getElementById('number').value = numCoute
    // document.getElementById('Vowals').value = vowalcount
}

function Wordcounter(){
    let inputText = document.getElementById('inputboxid')
    let words = getWordCount(inputText.value)
    document.getElementById('words').value = words
    counter(inputText.value)
   
}
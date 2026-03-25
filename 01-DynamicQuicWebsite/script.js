let quizdata = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    options: ['<js>', '<scripting>', '<script>', '<javascript>'],
    correct: 2
  },
  {
    question: 'Which keyword is used to declare a constant variable in JavaScript?',
    options: ['var', 'const', 'let', 'static'],
    correct: 1
  },
  {
    question: 'Which operator is used to check both value and type equality??',
    options: ['=', '==', '!=', '==='],
    correct: 3
  },
  {
    question: 'What will be the output of typeof null in JavaScript?',
    options: ['object', 'undefined', 'null', 'string'],
    correct: 0
  }
]

let AnswerElm = document.querySelectorAll('.answer')
let quiz = document.querySelector('.Quic')
// Array Destructuring aur DOM Selection. 
var [questionelm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll('#Question, #answer_1, #answer_2, #answer_3, #answer_4');

// const a = document.getElementById('answer_1')
// // const questionelm = document.querySelector('#Question')
// const allOptions = [option_1, option_2, option_3, option_4];
// const errorhandle = document.querySelectorAll('#answer_1', '#answer_2', '#answer_3', '#answer_4')

const submitelm = document.querySelector('.Submit_btn')

const score = 0
let quizquestion = 0

const loadquiz = () => {
  const { question, options } = quizdata[quizquestion] //Give me all quizdata 
  questionelm.innerHTML = question

  // options.forEach((curroption, index) =>{
  //   // option_1.innerHTM  = currentopstion
  //   // window[`option_${index}`].innerText = currentopstion
  //   // console.log(window[`option_${index + 1}`].innerText = curroption)
  //   // if(allOptions(index)){
  //   //   allOptions(index).innerText = curroption
  //   //   console.log(`Updated Option ${index + 1}: ${curroption}`);
  //   // }
  // }) 

  options.forEach((curroption, index) => (window[`option_${index + 1}`].innerText = curroption))
}
loadquiz()

function getchooseindex() {
  // let arr_index 
  // AnswerElm.forEach((curoption, index)=>{
  //   if(curoption.checked){
  //     arr_index = index
  //     }   
  // })
  //  return arr_index and next method
  let converdArray = Array.from(AnswerElm) // An iterable object and string to convert to an array.
  return converdArray.findIndex((curElm) => curElm.checked)

}

const deselectedData = () =>{
  AnswerElm.forEach((curoption) => { curoption.checked = false})
}

submitelm.addEventListener('click', () => {
  const chooseradiobtm = getchooseindex()

  quizquestion++

if(chooseradiobtm === quizdata[quizquestion].correct) {
  // score =+ 1
  scrore = scrore + 1
}

  if(quizquestion < quizdata.length) {
    deselectedData()
    loadquiz()
  }else{
     quiz.innerHTML = `
        <div class="Quic">
            <h2 class="Question" id="Question"> Your score :  ${score}/ ${quizdata.length} Correct Answer</h2>                   
            <p>Congratulasion Your are win this game </p>
            <button class="reload_btn" onclick="location.reload()" >Play Again</button>
            </div>
            <div class="Quic_submit">
        </div>
     `
  }
})


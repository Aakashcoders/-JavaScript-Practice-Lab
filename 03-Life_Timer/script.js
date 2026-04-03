const imgBtn = document.getElementById('set_icon')
const set_dbirth = document.querySelector('.set_dbirth')
const dbInput = document.getElementById('db_input')
const dbBtn = document.getElementById('db_btn')
const initialShowdiv = document.getElementById('initialShowdiv')
const AfterBtnclickShow = document.getElementById('AfterBtnclickShow')
const years =  AfterBtnclickShow.querySelector('.years')
const months =  AfterBtnclickShow.querySelector('.months')
const Days =  AfterBtnclickShow.querySelector('.Days')
const Houre =  AfterBtnclickShow.querySelector('.Houre')
const Minutes =  AfterBtnclickShow.querySelector('.Minutes')
const Seconds =  AfterBtnclickShow.querySelector('.Seconds')

let Sfalse = false
let dbstore 
const  dbBtnclicktoggleClass = () =>{
    if(Sfalse){
        set_dbirth.classList.add('hide')
    }else{
       set_dbirth.classList.remove('hide')
    }
   Sfalse = !Sfalse
}

const maketwoDigitnumber = (number)=>{
   return number > 9 ? number : `0${number}` //it is Ternary Operator (Conditional Operator)
}

const localStorageStop  = ()=>{
    const dbyear = localStorage.getItem('year')
    const dbmonth = localStorage.getItem('month')
    const dbday = localStorage.getItem('day')
    const dbhour = localStorage.getItem('hour')
    const dbminute = localStorage.getItem('minute')
    const dbmillisecond = localStorage.getItem('millisecond')

    if(dbyear && dbmonth && dbday && dbhour && dbminute && dbmillisecond){
        // console.log(dbyear, dbmonth, dbday, dbhour, dbminute, dbmillisecond)
        dbstore = new Date(dbyear, dbmonth, dbday, dbhour, dbminute, dbmillisecond)
    }
    dbupdateValue()
}

const dbupdateValue = ()=>{
    const currentdate = new Date()
    const dbDiff = currentdate - dbstore //Bache huaa saal

    const year = Math.floor(dbDiff / (1000 * 60 * 60 * 24 * 365))
    //dbDiff / 1000: Milliseconds in a second * 60: Seconds in a minute * 60: Minutes in an hour * 24: Hours in a day * 365: Days in a year =  31,536,000,000 : One year in milliseconds
    const month = Math.floor(dbDiff / (1000 * 60 * 60 * 24 * 365)) % 12
    //dbDiff / 1000: Milliseconds in a second * 60: Seconds in a minute * 60: Minutes in an hour * 24: Hours in a day * 365: Days in a year % 12 = kitne months
    const day = Math.floor(dbDiff / (1000 * 60 * 60 * 24 )) % 30
    const hour = Math.floor(dbDiff / (1000 * 60 * 60 )) % 24
    const minute  = Math.floor(dbDiff / (1000 * 60 )) % 60
    const millisecond = Math.floor(dbDiff / (1000)) % 60

    years.innerHTML = maketwoDigitnumber(year)
    months.innerHTML = maketwoDigitnumber(month)
    Days.innerHTML = maketwoDigitnumber(day)
    Houre.innerHTML = maketwoDigitnumber(hour)
    Minutes.innerHTML = maketwoDigitnumber(minute)
    Seconds.innerHTML = maketwoDigitnumber(millisecond)
}

const dbtoggler = ()=>{
    if(dbstore){
        initialShowdiv.classList.add('hide')
        AfterBtnclickShow.classList.remove('hide')
    }
    else{
        initialShowdiv.classList.remove('hide')
        AfterBtnclickShow.classList.add('hide')
    }
}

const addclickVAlue = () =>{
    let dbString = dbInput.value

    dbstore = dbString ? new Date(dbString) : null
    
    if(dbstore){

        localStorage.setItem('year', dbstore.getFullYear())
        localStorage.setItem('month', dbstore.getMonth())
        localStorage.setItem('day', dbstore.getDay())
        localStorage.setItem('hour', dbstore.getHours())
        localStorage.setItem('minute', dbstore.getMinutes())
        localStorage.setItem('millisecond', dbstore.getMilliseconds())
       
       
    }
    dbtoggler()
    setInterval(()=>{dbupdateValue()}, 1000)
}

imgBtn.addEventListener('click', ()=>{
    dbBtnclicktoggleClass()
})
addclickVAlue() //load and run dont wait any task

// dbupdateValue() :  YAH addclickVAlue() function ek chal jaayega yani load ho jaayega tab chalega dbupdateValue()  yah  function load hoga chalega

localStorageStop()
dbtoggler()
dbBtn.addEventListener('click', addclickVAlue) 




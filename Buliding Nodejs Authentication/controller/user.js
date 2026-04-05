const User  = require('../Model/User')
const {v4 : uuidv4} = require('uuid')
// const {v4 as uuidv4} = require('uuid') same but different syntex but not a currect syntex
const {getUser, setUser} = require('../Services_Record/authen')
async function handleUserSingnUp(req, res){
    const {name, email, password} = req.body

    await User.create({  //new intriy create kar diya
        name,
        email,
        password,
    })
  
    return res.render('home')
    // return res.redirect('home')
}

async function handleUserlogin(req, res){
    const {email, password} = req.body
    const user = await User.findOne({email, password})

    if(!user) return res.render('login', {
        Error : "Invalid email and password"
    })
    //    return res.redirect('/') //yah bhej raha hai post request jo brower per nhi chalta hai
    //   return res.redirect('home')
    const sessionuuid = uuidv4() //craete a session id 
    //setting cookie
    res.cookie('uudid45', sessionuuid)
    return res.render('home')
}

module.exports = {
    handleUserSingnUp, handleUserlogin,
}
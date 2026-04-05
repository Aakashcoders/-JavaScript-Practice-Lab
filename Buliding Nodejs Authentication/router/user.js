const express = require('express')
const router =  express.Router()
const { handleUserSingnUp, handleUserlogin } = require('../controller/user')

router.post('/', handleUserSingnUp)

router.post('/login', handleUserlogin)

router.get('/singup', (req, res)=>{
    return res.render('singup')
})

module.exports = router
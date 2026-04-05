const {getUser } = require('../Services_Record/authen')

async function restrectToLogeddUseronly(req, res, next){ //handel user authenticasen
   const userId = req.cookies?.uudid45 //Yeh line client (browser) se aane wali cookie ko read karne ke liye use hoti hai.or ? questionmark laga ker ham chek kar sakte yah exist karta hi ki nhi

   if(!userId) return res.redirect('/login')
    const user = getUser(userId)  //req.cookies ek Object return karta hai. Is object ke andar Key cookie ka Name hota hai, aur Value us cookie ka Data hota hai.

   if(!user) return res.redirect('/login')

    req.user = user
    next()
}

module.exports = restrectToLogeddUseronly

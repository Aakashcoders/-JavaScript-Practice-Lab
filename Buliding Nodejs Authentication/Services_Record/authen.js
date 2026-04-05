const sessionIdUserMap = new Map() //

// 1. Storing data (Setting a session)
function setUser(id, user){
    sessionIdUserMap.set(id, user)
}

// 2. Retrieving data (Getting user info)
function getUser(id){
    sessionIdUserMap.get(id)
}

// / 3. Checking if session exists
// if(!sessionIdUserMap.has(id)) return res.render('login')


module.exports = {
    setUser, getUser,
}
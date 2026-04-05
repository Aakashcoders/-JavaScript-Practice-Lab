const mongoose = require('mongoose')

async function connectedMongoose(url){
    return mongoose.connect(url)
}

module.exports = connectedMongoose
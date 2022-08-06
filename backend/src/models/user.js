
const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"username is require"],
    },
    password:{
        type:String,
        required:[true,"password is require"],
    }
})

const User = model('user',userSchema)

module.exports = User
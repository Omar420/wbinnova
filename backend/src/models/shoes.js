
const {Schema, model} = require("mongoose")

const shoesSchema = new Schema({
    images:[String],
    brand:{
        type:String,
        required:[true,"brand is require"],
    },
    model:{
        type:String,
        required:[true,"model is require"],
    },
    price:{
        type:Number,
        required:[true,"price is require"],
    },
    currency:{
        type:String,
        required:[true,"currency is require"],
    },
    stores:{
        type:[String],
        required:[true,"stores is require"],
    }
})

const Shoes = model('shoes',shoesSchema)

module.exports = Shoes
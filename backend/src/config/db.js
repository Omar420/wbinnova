const mongoose = require("mongoose")

module.exports = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, (error) => {
            console.log("MONGODB CONNECTED",process.env.MONGO_URI)
        })

    } catch (error) {
        console.log("MONGODB CONNECTION ERROR")
    }
}
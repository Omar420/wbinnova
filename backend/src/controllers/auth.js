const { User } = require('../models')

const create = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const creds = req.body
        const user = await User.findOne(creds)
        if(!user) throw new Error("invalid username/password")
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


module.exports = {
    create,
    login
}
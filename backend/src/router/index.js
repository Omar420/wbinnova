const { Router } = require("express")
const {shoes,auth} = require("./routes")
const router = Router()

module.exports = () => {
    router.use("/",auth())
    router.use("/shoes",shoes())
    return router
}
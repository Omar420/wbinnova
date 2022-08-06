
const { Router } = require("express")
const { AuthController } = require("../../controllers")
const router = Router()

module.exports = () => {
    router.post("/signup", AuthController.create)
    router.post("/login", AuthController.login)
    return router
}
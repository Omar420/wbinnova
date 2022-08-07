
const { Router } = require("express")
const { ShoesController } = require("../../controllers")
const { multerMiddleware } = require("../../middleware")
const router = Router()

module.exports = () => {

    router.get("/", ShoesController.getAll)
    router.get("/:id", ShoesController.getById)
    router.post("/",multerMiddleware, ShoesController.create)
    router.put("/:id", ShoesController.update)
    router.delete("/:id", ShoesController.remove)

    return router
}
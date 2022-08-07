const { Shoes } = require('../models')

const create = async ({ body, files = [], protocol, headers: { host } }, res) => {
    try {
        const data = {
            ...body,
            images: files.map(({ path }) => `${protocol}://${host}/${path}`)
        }
        const shoes = await Shoes.create(data)
        res.json(shoes)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getAll = async (req, res) => {
    try {
        const data = await Shoes.find()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Shoes.findById(id)
        if (!data) throw new Error('Item not found')
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const update = async ({ body, files = [], protocol,params, headers: { host } }, res) => {
    try {
        const id = params.id
        const newData = {
            ...body,
            images: files.map(({ path }) => `${protocol}://${host}/${path}`)
        }
        const data = await Shoes.findByIdAndUpdate(id,newData)
        if (!data) throw new Error('Item not found')
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Shoes.findByIdAndRemove(id)
        if (!data) throw new Error('Item not found')
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
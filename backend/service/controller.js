const serviceModel = require("./serviceModel")
const fetch = async (req, res) => {
    try {
        const services = await serviceModel.find()
        console.log(services)
        res.json({ success: true, services })
    } catch (err) {
        res.json({ err })
    }

}
const fetchOne = async (req, res) => {
    const id = req.body.id
    try {
        const service = await serviceModel.find({ _id: id })
        res.json({ success: true, service })

    } catch (err) {
        res.json({ err })
    }
}


const add = async (req, res) => {

    const { title, description } = req.body;
    try {
        await serviceModel.create({ title, description })
        res.json({ success: true })
    } catch (err) {
        res.json({ err })
    }
}

const modify = async (req, res) => {

    const { isModify, title, description } = req.body

    try {
        await serviceModel.updateOne({ _id: isModify }, { $set: { title, description } })
        res.json({ success: true })

    } catch (err) {
        res.json({ err })
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    try {
        await serviceModel.deleteOne({ _id: id })
        res.json({ success: true })

    } catch (err) {
        res.json({ err })
    }
}
module.exports = { fetch, fetchOne, add, modify, remove }
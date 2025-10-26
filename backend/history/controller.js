const model = require("./model")
const fetch = async (req, res) => {
    try {
        const Data = await model.find()
        res.json({ success: true, Data })
    } catch (err) {
        res.json({ err })
    }

}
const fetchOne = async (req, res) => {
    const id = req.body.id
    try {
        const Data = await model.find({ _id: id })
        res.json({ success: true, Data })
    } catch (err) {
        res.json({ err })
    }
}


const add = async (req, res) => {
    const { title, author, duration, description,role } = req.body;
    try {
        await model.create({ title, author, duration, description,role });
        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, err });
    }
};

const modify = async (req, res) => {
    const { isModify, title, author, duration, description,role } = req.body;
    try {
        await model.updateOne(
            { _id: isModify },
            { $set: { title, author, duration, description,role } }
        );
        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, err });
    }
};

const remove = async (req, res) => {
    const id = req.params.id
    try {
        await model.deleteOne({ _id: id })
        res.json({ success: true })

    } catch (err) {
        res.json({ err })
    }
}
module.exports = { fetch, fetchOne, add, modify, remove }
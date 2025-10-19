const portfolioModels = require('./model.js')
const add = async (req, res) => {
    const { title, description, category, link, img, id } = req.body
    try {
        await portfolioModels.create({
            title, description, category, link, img
        })
        res.json({ success: true })
    }
    catch (err) {
        res.json({ err, success: false })
    }
}
const modify = async (req, res) => {
    const { title, description, category, link, img, id } = req.body
    console.log(req.body)
    try {
        await portfolioModels.findOneAndUpdate({ _id:id }, {
            $set: {
                title, description, category, link, img
            }
        })
        res.json({ success: true })
    }
    catch (err) {
        res.json({ err, success: false })
    }
}
const fetch = async (req, res) => {
    try {
        const projects = await portfolioModels.find()
        res.json({ success: true, projects })
    }
    catch (err) {
        res.json({ err, success: false })
    }
}
const fetchOne = async (req, res) => {
  const { id } = req.body; // ✅ same as before
  try {
    // findOne or findById — both work
    const project = await portfolioModels.findOne({_id:id}); // ✅ correct field name
    console.log(project)
    res.json({ success: true, project }); // ✅ return single object
  } catch (err) {
    res.json({ err, success: false });
  }
};

const remove = async (req, res) => {
    const id = req.params.id
    try {
        await portfolioModels.deleteOne({ _id: id })
        res.json({ success: true })

    } catch (err) {
        res.json({ err, success: false })
    }

}
module.exports = { add, fetch, remove, modify,fetchOne }
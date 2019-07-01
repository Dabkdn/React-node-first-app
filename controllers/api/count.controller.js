const mongoose = require('mongoose')
const Count = mongoose.model('Count')

const addCount = async (req, res) => {
    try {
        Count.insertMany(req.body)
        res.sendStatus(200)
    }
    catch(err) {
        res.render('error')
    }
}
const getCounts = async (req, res) => {
    try {
        Count.find({}).then(result=> {
            res.json(result)
        })
    }
    catch(err) {
        res.sendStatus(400)
    }
}
const updateCount = (req, res) => {
    try {
        Count.update({_id: req.body.id}, {value: req.body.value})
        .then(result=> {
            res.json(result)
        })
    }
    catch(err) {
        res.sendStatus(400)
    }
}
const deleteCount = (req, res) => {
    try {
        Count.remove({_id: {$in: req.body}}).then(result => {
            res.json(result)
        })
    }
    catch(err) {
        res.sendStatus(400)
    }
}
const getCount = (req, res) => {
    try {
        Count.findOne({_id: req.query.id}).then(result => {
            res.json(result)
        })
    }
    catch(err) {
        res.sendStatus(400)
    }
}

module.exports = {
    addCount,
    getCounts,
    getCount,
    updateCount,
    deleteCount
}
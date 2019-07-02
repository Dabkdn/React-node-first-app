const {countService} = require('../../services')

const addCount = (req, res) => {
    try {
        countService.addCount(req.body)
        res.sendStatus(200)
    }
    catch(err) {
        res.render('error')
    }
}
const getCounts = (req, res) => {
    try {
        countService.getCounts().then(result => {
            res.json(result)
        })
    }
    catch(err) {
        res.sendStatus(400)
    }
}
const updateCount = (req, res) => {
    try {
        countService.updateCount(req.body.id, req.body.value)
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
        countService.deleteCount(req.body).then(result => {
            res.json(result)
        })
    }
    catch(err) {
        res.sendStatus(400)
    }
}
const getCount = (req, res) => {
    try {
        countService.getCount(req.query.id).then(result => {
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
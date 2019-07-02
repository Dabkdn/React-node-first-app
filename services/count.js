const mongoose = require('mongoose')
const Count = mongoose.model('Count')

const addCount = (data) => {
    return Count.insertMany(data)
}
const getCounts = () => {
    return Count.find({})
}
const updateCount = (id, value) => {
    return Count.update({_id: id}, {value: value})
}
const deleteCount = (data) => {
    return Count.remove({_id: {$in: data}})
}
const getCount = (id) => {
    return Count.findOne({_id: id})
}

module.exports = {
    addCount,
    getCounts,
    updateCount,
    deleteCount,
    getCount
}
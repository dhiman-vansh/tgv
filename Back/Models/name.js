const mongoose = require("mongoose")
const nameSchema = new mongoose.Schema({
    date:{
        type: Date,
        unique:true
    },
   slots: Number
})

const Name = new mongoose.model('Name', nameSchema)
module.exports = Name;
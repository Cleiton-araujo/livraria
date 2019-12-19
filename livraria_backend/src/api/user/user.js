const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    email: {type: String, require: true},
    senha: {type: String, require: true, select: false},
    is_admin: {type: Boolean, require: true, default: false },

})

module.exports = restful.model('User', userSchema)
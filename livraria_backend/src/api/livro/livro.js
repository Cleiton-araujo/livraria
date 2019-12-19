const restful = require('node-restful')
const mongoose = restful.mongoose

const livroSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    ano: {type: Number, require: true},
    valor: {type: Number, require: true},
    autores: {type: [String], require: true},
    descricao: {type: String, require: true},
    editora: {type: String, require: true},

})

module.exports = restful.model('Livro', livroSchema)
const restful = require('node-restful')
const mongoose = restful.mongoose

const pedidoSchema = new mongoose.Schema({
    id_user: {type: String, require: false},
    data: {type: Date, require: true,  default: Date.now},
    total: {type: Number, require: true},
    status: {type: String, require: true, default:"Realizado"},
    livros: {type: [{
        titulo: {type: String, require: true},
        ano: {type: Number, require: true},
        quantidade: {type: Number, require: true},
        valor: {type: Number, require: true},  
        autores: {type: [String], require: true},
        descricao: {type: String, require: true},
        editora: {type: String, require: true},
    }] , require: true},
})

module.exports = restful.model('Pedido', pedidoSchema)
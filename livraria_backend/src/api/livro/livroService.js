const Livro = require('./livro')

Livro.methods(['get', 'post', 'put', 'delete'])
Livro.updateOptions({new: true, runValidators: true})

module.exports = Livro
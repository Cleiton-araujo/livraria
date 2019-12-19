const express = require('express')

module.exports = function(server){


    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Livro Routes
    const livroService = require('../api/livro/livroService')
    livroService.register(router, '/livros')

     //User Routes
     const userService = require('../api/user/userService')
     userService.register(router, '/users')

     //Pedido Routes
     const pedidoService = require('../api/pedido/pedidoService')
     pedidoService.register(router, '/pedidos')

}
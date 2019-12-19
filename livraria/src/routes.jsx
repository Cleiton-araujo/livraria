import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from './pages/home/home'
import Carrinho from './pages/carrinho/carrinho'
import Pedidos from './pages/pedidos/pedidos'
import Cadastro from './pages/cadastro/cadastro'

export default props => (
    <Router history={hashHistory}>
        <Route path='/livros' component={Home} />
        <Route path='/carrinho' component={Carrinho} />
        <Route path='/pedidos' component={Pedidos} />
        <Route path='/cadastro' component={Cadastro} />
        <Redirect from='*' to='/livros' />
    </Router>
)

import React from 'react'

export default props =>(
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#/livros'>
                    <i className='fa fa-calendar-check-o'></i> Livraria
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/livros'>Livros</a></li>
                    <li><a href='#/carrinho'>Carrinho</a></li>
                    <li><a href='#/pedidos'>Pedidos</a></li>
                </ul>
            </div>
        </div>
    </nav>
)
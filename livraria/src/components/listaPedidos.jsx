import React from 'react'

import formatData from '../helpers/formatDate'
import formatMoeda from '../helpers/formatMoeda'

export default (props) =>{
    
    let renderLivros = (livros) => {
        return livros.map(livro => (
            <ul className="list-group list-group-flush">             
                <li class="list-group-item item-livro">
                {livro.quantidade} - {livro.titulo}
                </li>
            </ul>
           
        ))
    }
    const renderCardsPedidos = () =>{
        const list = props.list || []
        return list.map( pedido =>(
            <div class="card card-pedido">
                    <div class="card-header">
                        {formatData(new Date(pedido.data))} - {pedido.livros.length} Titulos
                    </div>
                    <div className="card-body">
                    <h2 className="card-title">{formatMoeda(pedido.total)} </h2>
                    <p className="card-text">{renderLivros(pedido.livros)}</p>
                    <h4 className="card-title">{pedido.status} </h4>
                    <button className="btn btn-primary margin-lados" onClick={()=>props.handleCancelarPedido(pedido)} disabled ={pedido.status == "Realizado" ? false : true}>Cancelar</button>
                    <button className="btn btn-danger margin-lados" onClick={()=>props.handleExcluirPedido(pedido)} >Excluir</button>
                </div>
            </div> 
            
        ))
    }

return (

    <div>
        
{renderCardsPedidos()}
    </div>   

)}
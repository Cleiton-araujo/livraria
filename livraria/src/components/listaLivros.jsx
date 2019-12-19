import React from 'react'
import formatMoeda from '../helpers/formatMoeda'

export default (props) =>{
    let renderAutores = (autores) => {
        return autores.map(autor => (
            <h6 className="card-subtitle mb-2 text-muted">{autor}</h6>
        ))
    }



    const renderLivros = () =>{
        const list = props.list || []
        return list.map( livro =>(
            <div className="card card-livro" key={livro._id}>
                <div className="card-body">
                    <h3 className="card-title">{livro.titulo}</h3>
                    {renderAutores(livro.autores)}
                    <h5 className="card-title">Editora: {livro.editora} , {livro.ano}</h5>
                    
                    <p className="card-text">{livro.descricao}</p>
                    <h2 className="card-title">{formatMoeda(livro.valor)}</h2>
                    <button class="btn btn-primary" onClick={()=>props.handleAddCart(livro)}>Add ao Carrinho</button>
            
                </div>
            </div> 
            
        ))
    }

return (

    <div>
        {renderLivros()}

    </div>   

)}

import React from 'react'
import formatMoeda from '../helpers/formatMoeda'

export default (props) =>{
    

    const renderRows = () =>{
        const list = props.list || []
        return list.map( item =>(
            <tr>
                <td>{item.livro.titulo}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={()=>props.handleSubtrairQuant(item)}>-</button>
                    <span className='margin-lados'>{item.quantidade}</span> 
                    <button type="button" className="btn btn-primary" onClick={()=>props.handleAdicionarQuant(item)}>+</button>
                </td>
                <td>
                <button type="button" className="btn btn-outline-danger" onClick={()=>props.handleExcluirItem(item)}>Excluir</button>
                </td>

                <td><strong>{formatMoeda(item.livro.valor * item.quantidade)}</strong></td>
            </tr>          
        ))
    }

return (

    <table className="table">
    <thead>
      <tr>
        <th scope="col">Livro</th>
        <th scope="col">Quantidade</th>
        <th scope="col">-</th>
        <th scope="col">Total</th>
        
      </tr>
    </thead>
    <tbody>
     
     {renderRows()}
    </tbody>
  </table> 

)}

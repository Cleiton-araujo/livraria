import React, { Component } from 'react';



import axios from 'axios'
import ListaPedidos from '../../components/listaPedidos';


const URL = 'http://localhost:3003/api/pedidos'


export default class Pedidos extends Component{

    constructor(props){
        super(props)

        this.state = {pedidos: []}

        this.handleCancelarPedido = this.handleCancelarPedido.bind(this)
        this.handleExcluirPedido = this.handleExcluirPedido.bind(this)

        this.refresh()
        
    }


    refresh(){
        axios.get(URL).then((resp)=> {
            this.setState({...this.state, pedidos: resp.data})
        })
    }

    handleCancelarPedido(pedido){
        pedido.status = "Cancelado"
        axios.put(`${URL}/${pedido._id}`, pedido).then((resp)=> {
           this.refresh()
        })
        
        
    }

    handleExcluirPedido(pedido){
        pedido.status = "Cancelado"
        axios.delete(`${URL}/${pedido._id}`).then((resp)=> {
           this.refresh()
        })
        
        
    }



    render(){
        return(
            <div>
                <h1>Pedidos</h1>

                <ListaPedidos 
                list={this.state.pedidos}
                handleCancelarPedido={this.handleCancelarPedido}
                handleExcluirPedido={this.handleExcluirPedido}/>
                

            </div>
        )
    }

}
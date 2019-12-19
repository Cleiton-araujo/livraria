import React, { Component } from 'react';
import axios from 'axios'
import ItensCarrinho from '../../components/itensCarrinho'
import formatMoeda from '../../helpers/formatMoeda'

const URL = 'http://localhost:3003/api/pedidos'


export default class Carrinho extends Component{

    constructor(props){
        super(props)
        this.state = {cart: []}
        this.handleSubtrairQuant = this.handleSubtrairQuant.bind(this)
        this.handleAdicionarQuant = this.handleAdicionarQuant.bind(this)
        this.handleExcluirItem = this.handleExcluirItem.bind(this)
        this.limparCarrinho = this.limparCarrinho.bind(this)
        this.fecharPedido = this.fecharPedido.bind(this)
    }

    handleAdicionarQuant(item){
        let itens = this.state.cart
        itens.map((itemB)=>{
            if(itemB == item){
               item.quantidade ++ 
            }
        })     
       this.setState({cart:itens})
       
    }

    handleSubtrairQuant(item){
        let itens = this.state.cart
        itens.map((itemB)=>{
            if(itemB == item){
               item.quantidade -- 
            }
            if(item.quantidade <= 0){
                itens = this.arrayRemove(itens, item)
            }
        })     
       this.setState({cart:itens})
      
    }

    handleExcluirItem(item){
        let itens = this.arrayRemove(this.state.cart, item)
        this.setState({cart:itens})
    }

    arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
        
     }

     limparCarrinho(){
        if(this.state.cart.length > 0){
            localStorage.setItem('carrinho', JSON.stringify([])); 
            this.setState({...this.state, cart: []})
        }
     }



     getTotal(){
         let itens = this.state.cart
         let soma = 0
         itens.forEach(item=>{
            soma += item.quantidade * item.livro.valor
         })
         return soma
     }

    componentDidMount(){
        let car = JSON.parse(localStorage.getItem('carrinho'))
        if(car == null){
            car = []
        }
        this.setState({cart: car})
    }

    fecharPedido(){
        if(this.state.cart.length == 0){
            return
        }
        let livros = this.state.cart.map((item)=>{
            let livro = item.livro
            livro.quantidade = item.quantidade
            return livro 
        })

        

        let dados = {
            total : this.getTotal(),
            livros: livros
        }
        

        axios.post(URL, dados).then((resp)=> {
            
           this.limparCarrinho()
           alert("Pedido finalizado com sucesso!")
        })
    }

    render(){
        
        
        return(
            <div>
                <h1>Carrinho</h1>
                <ItensCarrinho 
                list={this.state.cart} 
                handleSubtrairQuant = {this.handleSubtrairQuant}
                handleAdicionarQuant = { this.handleAdicionarQuant}
                handleExcluirItem = {this.handleExcluirItem}
                />
                <h3 className="txt-dir">Total: {formatMoeda(this.getTotal())}</h3>
                <p className="txt-dir">
                <button type="button" className="btn btn-info margin-lados" onClick={this.limparCarrinho}>Limpar Carrinho</button>
                <button type="button" className="btn btn-primary margin-lados" onClick={this.fecharPedido} >Fechar Pedido</button>

                </p>
            </div>
        )
    }

}
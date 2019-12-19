import React, { Component } from 'react';

import axios from 'axios'

import ListaLivros from '../../components/listaLivros'


const URL = 'http://localhost:3003/api/livros'

export default class Home extends Component{

    constructor(props){
        super(props)

        this.state = {carrinho: [], listaLivros: []}

        this.handleAddCart = this.handleAddCart.bind(this)

        this.refresh()
        
    }


    refresh(){
        axios.get(URL).then((resp)=> {
            
            this.setState({...this.state, listaLivros: resp.data})
            this.attItensCarrinho()
          
        })
    }

    attItensCarrinho(){
        let carrinho = JSON.parse(localStorage.getItem('carrinho'))
        if(carrinho == null){
            carrinho = []
        }
        this.setState({carrinho : carrinho})     
    }

    handleAddCart(livro){       
        let carrinho = JSON.parse(localStorage.getItem('carrinho'))
        if(carrinho == null){
            carrinho = []
        }

        let novo = true
        carrinho.map((c)=>{
               if(c.livro._id == livro._id){
                   c.quantidade ++
                   novo= false
               }
        })
        if(novo){
            carrinho.push({
                quantidade: 1,
                livro: livro
            }) 
        }  
        this.setState({carrinho : carrinho})  
        localStorage.setItem('carrinho', JSON.stringify(carrinho));   
    }

    render(){
        return(
            <div>
                <h1>Livros</h1>
                <h4 className="txt-dir">Itens no Carrinho ({this.state.carrinho.length})</h4>
                <ListaLivros 
                list = {this.state.listaLivros} 
                handleAddCart = {this.handleAddCart}
                />
            </div>
        )
    }

}
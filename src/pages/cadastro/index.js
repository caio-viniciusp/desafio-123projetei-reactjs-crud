import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../api/api.js';
import './index.scss'

class Store extends Component {
  
  state = {
    pessoas:{
    cpf:'',
    name:'',
    phone:'',
    birth:''
    },
    redirect: false
  }

  componentDidMount() {
    api.post('/pessoas')
    
  }
  render () {
    const {redirect} = this.state
    if(redirect){
      return <Redirect to="/pessoas"/>
    } else {
      return (
        <div className="cadastro">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
          <h3>Cadastrar Pessoa Física</h3>
            <label htmlFor="name">Nome </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Insira o nome"
                minLength="3"
                maxLength="100"
                required
                value={this.state.pessoas.name}
                onChange={this.handleInputChange}
            />
            <label htmlFor="cpf">CPF </label>
            <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Insira o CPF"
                minLength="11"
                maxLength="11"
                required
                value={this.state.pessoas.cpf}
                onChange={this.handleInputChange}
            />
            <label htmlFor="birth">Data de Nascimento </label>
            <input
                type="date"
                id="birth"
                name="birth"
                placeholder="Data de Nascimento"
                required
                value={this.state.pessoas.birth}
                onChange={this.handleInputChange}
            />
            <label htmlFor="phone">Telefone </label>
            <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Insira o Telefone"
                minLength="11"
                maxLength="11"
                required
                value={this.state.pessoas.phone}
                onChange={this.handleInputChange}
            />
            <button type="submit" className="btn">Cadastrar</button>
          </form>
        </div>
      </div>
      )
    }
  }
  
}

export default Store;
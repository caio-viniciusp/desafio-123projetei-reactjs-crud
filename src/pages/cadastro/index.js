import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import api from '../../api/api.js';
import './index.scss'

class Store extends Component {

  state = {
      cpf:'',
      name:'',
      phone:'',
      birth:''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value 
      })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await api.post('/pessoas')
        this.props.history.push('/pessoas')
    }

  render () {
      return (
        <div className="cadastro">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
          <h3>Cadastrar Pessoa Física</h3>
          
          <label>
          CPF:</label>
          <input type="text" name="cpf" onChange={this.handleChange} className="inputfield"/>
          <label>
          Nome:</label>
          <input type="text" name="name" onChange={this.handleChange} className="inputfield"/>
          <label>
          Data de Nascimento:</label>
          <input type="date" name="birth" onChange={this.handleChange} className="inputfield"/>
          <label>
          Telefone:</label>
          <input type="text" name="phone" onChange={this.handleChange} className="inputfield"/>
          <input type="submit" value="Cadastrar" className="btn"/>
          </form>
        </div>
      </div>
      )
    }
  }


export default Store;
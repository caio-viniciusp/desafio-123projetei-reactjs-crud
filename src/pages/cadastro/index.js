import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import api from '../../api/api.js';
import './index.scss'

class Store extends Component {
 constructor(props){
   super(props);

   this.state = {
    cpf:'',
    name:'',
    phone:'',
    birth:''
  }
 }
  

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value 
      })
    }

    handleSubmit =  event => {
        event.preventDefault();
        api.post('/pessoas', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          api.post('/pessoas', this.state)
          console.log(error)
        })
        
        this.props.history.push('/pessoas')
    }

  render () {
    const {cpf, name, birth, phone} = this.state
      return (
        <div className="cadastro">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
          <h3>Cadastrar Pessoa Física</h3>
          
          <label>
          CPF:</label>
          <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={this.handleChange}
          className="inputfield"/>

          <label>
          Nome:</label>
          <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          className="inputfield"/>

          <label>
          Data de Nascimento:</label>
          <input
          type="date"
          name="birth"
          value={birth}
          onChange={this.handleChange}
          className="inputfield"/>
          
          <label>
          Telefone:</label>
          <input
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          className="inputfield"/>

          <input
          type="submit"
          value="Cadastrar"
          className="btn"/>
          </form>
        </div>
      </div>
      )
    }
  }


export default Store;
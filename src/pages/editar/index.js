import React, { Component } from 'react';
import api from '../../api/api';
import './index.scss';

class Edit extends Component {

  state = {
    pessoa: {
    },
  }

  async componentDidMount() {
    var { cpf } = this.props.match.params;
    var response = await api.get(`/pessoas/${cpf}`) 
    this.setState({pessoa: response.data});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    await api.put('/pessoas')
    this.props.history.push('/pessoas')
  }   

  render () {
    return(
      <div className="editPessoa">
        <form onSubmit={this.handleSubmit}>
        <h3>Editar Dados da Pessoa</h3>
          <label>CPF:</label>
          <input 
          type="text" 
          value={this.state.pessoa.cpf} 
          onChange={this.handleChange} 
          className="inputfield"/>

          <label>Nome:</label>
          <input
          type="text"
          value={this.state.pessoa.name}
          onChange={this.handleChange} 
          className="inputfield"/>

          <label>Data de Nascimento:</label>
          <input
          type="date"
          value={this.state.pessoa.birth}
          onChange={this.handleChange}
          className="inputfield"/>

          <label>Telefone:</label>
          <input
          type="text" 
          value={this.state.pessoa.phone} 
          onChange={this.handleChange}
          className="inputfield"/>

          <input type="submit" value="Atualizar" className="btn"/>
      </form>
      </div>
    )
  }

}

export default Edit;
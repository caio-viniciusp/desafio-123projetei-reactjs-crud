import React, { Component } from 'react';
import api from '../../api/api'
import './index.scss'


class DeleteConfirm extends Component {
  state = {
    pessoa: {},
  }

  async componentDidMount() {
    const { cpf } = this.props.match.params;
    const response = await api.delete(`/pessoas/${cpf}`) 
    this.setState({pessoa: response.data});
  }

  render (){
    const {pessoa} = this.state
    console.log(pessoa)
    return (
      <div className="deleteConfirm">
        <div className="container">
          <div className="card">
            <h3>Confirmação de Exclusão de Cadastro</h3>
            <img src="/delete-icon.svg" alt="delete icon"/>
            <p>O cadastro foi excluído do sistema.</p>
          
            <a href="/pessoas">Voltar para a lista de pessoas</a>
            <a href="/">Voltar para a página inicial</a>
          </div>
        </div>
      </div>
    )
  }
}

export default DeleteConfirm;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api.js';
import './index.scss';


class View extends Component {
  
  state = {
    pessoa: {},
  }

  async componentDidMount() {
    const { cpf } = this.props.match.params;
    const response = await api.get(`/pessoas/${cpf}`) 
    this.setState({pessoa: response.data});
  }

  render () {
    const {pessoa} = this.state
    console.log(pessoa)
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="icon">
            <img src="/pessoa-icon.svg" alt="icone"></img>
          </div>
          <div className="dados">
            <div className="pessoa-info">
              <h3>{pessoa.name}</h3>
              <span>CPF:</span>
              <p>{pessoa.cpf}</p>
              <span>Telefone:</span>
              <p>{pessoa.phone}</p>
              <span>Data de Nascimento:</span>
              <p>{pessoa.birth}</p>
            </div>
           
            <div className="date">
            <span>Criado em:</span>
            <p>{pessoa.createdAt}</p>
            <span>Atualizado em:</span>
            <p>{pessoa.updatedAt}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href={`/pessoas/editar/${pessoa.cpf}`}className="editar"><Link to={`/pessoas/editar/${pessoa.cpf}`}>editar</Link></a>
          <a href={`/pessoas/excluir/${pessoa.cpf}`} className="excluir"><Link to={`/pessoas/excluir/${pessoa.cpf}`}>Excluir</Link></a>
        </div>
      </div>
    )
  }
}
  


export default View;
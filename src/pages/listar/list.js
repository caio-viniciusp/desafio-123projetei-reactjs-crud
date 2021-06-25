import React, { Component } from 'react';
import api from '../../api/api.js';
import './list.scss'

class List extends Component {
  
  state = {
    pessoas:[],
  }

  async componentDidMount() {
    const response = await api.get('/pessoas')

    console.log(response.data);

    this.setState({pessoas: response.data});
  }
  render () {
    const {pessoas} = this.state
    console.log(pessoas)
    return (
      <div className="lista">
      <div className="container">
        <h1>Pessoas cadastradas no sistema estão listadas abaixo:</h1>
        <ul>
          {pessoas.map(pessoa => (
            <div key={pessoa.cpf}>
             
              <div className="cards">
                <div className="card">
                  <div className="card-header">
                    <div className="card-icon">
                      <img src="/icon.png" alt="icone">
                    </img>
                    </div>
                    <div className="card-pessoainfo">
                      <h3>{pessoa.name}</h3>
                      <span>Data de Nascimento:</span>
                      <p>{pessoa.birth}</p>
                      <span>CPF:</span>
                      <p>{pessoa.cpf}</p>
                      <span>Telefone:</span>
                      <p>{pessoa.phone}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                  <a>Ver detalhes</a>
                </div>
                </div>
              </div>
              </div>
          ))}
          
        </ul>
        </div>
      </div>
    )
  }
}

export default List;

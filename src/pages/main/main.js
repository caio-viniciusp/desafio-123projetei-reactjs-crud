import React, { Component } from 'react';
import './main.scss'

class Main extends Component {
  
  render () {
    return (
      <div className="inicio">
        <div className="container">
          <h1>Bem vindo ao Sistema de Cadastro de PF</h1>
                <div className="cards">
                  <div className="card">
                      <div className="card-icon">
                        <img src="/icon-novocadastro.svg" alt="icone"></img>
                      </div>
                    <div className="card-footer">
                      <a href="/cadastrar/">Novo Cadastro</a>
                    </div>
                  </div>
                  <div className="card">
                      <div className="card-icon">
                        <img src="/icon-lista.svg" alt="icone"></img>
                      </div>
                      <div className="card-footer">
                        <a href="/">LISTAR PESSOAS</a>
                      </div>
                  </div>
                </div>
        </div> 
      </div>
    )
  }
}

export default Main;
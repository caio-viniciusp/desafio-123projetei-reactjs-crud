import React from 'react';
import './index.scss';

function Main (){

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
                      <a href="/cadastrar">Novo Cadastro</a>
                    </div>
                  </div>
                  <div className="card">
                      <div className="card-icon">
                        <img src="/icon-lista.svg" alt="icone"></img>
                      </div>
                      <div className="card-footer">
                        <a href="/pessoas">LISTAR PESSOAS</a>
                      </div>
                  </div>
                </div>
        </div> 
      </div>
    )
  }


export default Main;
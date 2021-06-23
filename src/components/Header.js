import React from 'react';
import './header.css'
import '../styles/global.scss';


const Header = () => (
  <header className="header">
    <div className="container">
      <div className="menu">
      <div className="logo">
        <img src="/123projete.png" alt="123projetei logo"></img>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Cadastro</a></li>
            <li><a href="#">Pessoas</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  </header>
);

export default Header;
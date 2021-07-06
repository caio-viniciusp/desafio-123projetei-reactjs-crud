import React, { Component } from 'react';
import api from '../../api/api';
import './index.scss';

class Edit extends Component {
  constructor(props){
    super(props);
 
    this.state = {
        pessoa: {
          cpf:'',
          name:'',
          phone:'',
          birth:''
        }
        
   }
  }

  async componentDidMount() {
    const { cpf } = this.props.match.params;
    const response = await api.get(`/pessoas/${cpf}`) 
    this.setState({pessoa: response.data});
    
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  
  handleSubmit = event => {
    event.preventDefault();
    const { cpf } = this.props.match.params;
    api.put(`/pessoas/${cpf}`, this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      api.put(`/pessoas/${cpf}`, this.state)
      console.log(error)
    })
  }

  render () {
    
    var {pessoa} = this.state
    console.log(this.state)
    return(
      <div className="editPessoa">
         <form onSubmit={this.handleSubmit} className="form">
          <h3>Cadastrar Pessoa Física</h3>
          <div key={pessoa.cpf}>
          <label>
          Nome:</label>
          <input
          type="text"
          name="name"
          value={pessoa.name}
          onChange={this.handleChange}
          className="inputfield"/>

          <label>
          Data de Nascimento:</label>
          <input
          type="date"
          name="birth"
          value={pessoa.birth}
          onChange={this.handleChange}
          className="inputfield"/>
          
          <label>
          Telefone:</label>
          <input
          type="text"
          name="phone"
          value={pessoa.phone}
          onChange={this.handleChange}
          className="inputfield"/>

          <input
          type="submit"
          value="Cadastrar"
          className="btn"/>
          </div>
          </form>
      </div>
    )
  }

}

export default Edit;
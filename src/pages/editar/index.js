import React, { Component } from 'react';
import api from '../../api/api';
import './index.scss';

class Edit extends Component {

  state = {
    pessoa: {
    },
  }

  async componentDidMount() {
    const { cpf } = this.props.match.params;
    const response = await api.get(`/pessoas/${cpf}`) 
    this.setState({pessoa: response.data});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    return(
      <div className="editPessoa">
        <h1>Editar Dados da Pessoa</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.pessoa.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      </div>
    )
  }

}

export default Edit;
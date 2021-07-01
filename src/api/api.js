import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-123projetei-node.herokuapp.com'
});

export default api;
import axios from 'axios';

// configuração default do axios para as futuras chamadas
const api = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  responseType: 'json',
});

export default api;

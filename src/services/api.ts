import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-teste-tecnico-xydhi.ondigitalocean.app'
});

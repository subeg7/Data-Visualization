import axios from 'axios';
import { baseUrl } from './apiLink';

export const api = axios.create({
  baseUrl,
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  crossDomain: true,
});
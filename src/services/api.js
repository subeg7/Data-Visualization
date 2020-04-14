import axios from 'axios';
import {dataUrl } from './apiLink';

export const api = axios.create({
    dataUrl,
    timeout: 60000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    crossDomain: true,
  });
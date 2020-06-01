import axios from 'axios';

import { baseUrl } from './constants';
import { createParamsString } from '../shared/helper';

export default async (url, params = {}, method = 'GET') => {
  try {
    let finalUrl = baseUrl + url + (method === 'GET' ? createParamsString(params) : '');
    const configObj = {
      method,
      url: finalUrl
    };
    if (method !== 'GET') {
      configObj['data'] = params;
    }
    const response = await axios({ ...configObj });
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
}
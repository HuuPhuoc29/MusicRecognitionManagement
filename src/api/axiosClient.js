import axios from 'axios';
import queryString from 'query-string';
import { parse, stringify } from 'qs'

import { API_URL, LOCAL_STORAGE_ACCESS_TOKEN_NAME } from '../contexts/constants';

const axiosClient = axios.create({
  // baseURL: API_URL,
  // headers: {
  //   "Access-Control-Allow-Origin": "*"
  //   // 'content-type': 'application/json',
  //   // Authorization: `Bearer ${localStorage[LOCAL_STORAGE_ACCESS_TOKEN_NAME]}`,
  // },
  // paramsSerializer: params => queryString.stringify(params),

  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

export default axiosClient;

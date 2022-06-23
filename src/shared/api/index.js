import axios from 'axios';
import queryString from 'query-string';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

api.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  throw error;
});

export default api;
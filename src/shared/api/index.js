import axios from 'axios';

const api = axios.create({
  baseURL: 'https://protected-depths-56003.herokuapp.com/api',
  headers: {
    'content-type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  // const token = await getFirebaseToken();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

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
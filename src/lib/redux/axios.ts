import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '', // each slice will use different url
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: interceptors
axiosInstance.interceptors.request.use((config) => {
  
  config.headers['X-Header-Test01'] = 'Test01';
  config.headers['X-Header-Test02'] = 'Test02';
  config.headers.Authorization = 'Bearer token';

  return config;
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

import axios from 'axios';

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // Your Laravel API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to include the JWT token in the Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');  // Get token from localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

import api from "../../Helper/Api/api";

export const loginService = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.access_token);
  return response;
};


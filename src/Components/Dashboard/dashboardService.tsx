import api from "../../Helper/Api/api";

export const getDashboardData = async () => {
  return await api.get('/dashboard');
};

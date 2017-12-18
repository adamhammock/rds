import apiService from '../services';

export const loginUser = data =>
  apiService.post(`/api/customers/login`, data);

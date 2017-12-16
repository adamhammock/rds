import apiService from '../services';

export const loginUser = data =>
  apiService.post(`/api/login`, data);

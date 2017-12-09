import apiService from '../services';

export const loginUser = data =>
  apiService.post(`/login`, data);
  
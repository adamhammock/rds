import apiService from '../services';

export const loginUser = data =>
  apiService.post(`/api/customers/login`, {
    "username": "demouser8@gmail.com",
    "password": "123456"

  });

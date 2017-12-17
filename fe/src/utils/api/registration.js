
import apiService from '../services';

export const registerAccount = data =>
  apiService.post('/api/customers/register', data);

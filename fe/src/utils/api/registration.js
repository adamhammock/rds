
import apiService from '../services';

export const registerAccount = data =>
  apiService.post('/api/accounts/register', data);

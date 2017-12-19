import * as authenticationApi from '../../utils/api/authentication';
import loginActions from '../constants/action-types/login';
import commonActions from '../constants/action-types/common';

export const loginUser = (params, onSuccessCallback) => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: loginActions.AUTH_USER,
  promise: () => authenticationApi.loginUser(params),
  onSuccessCallback: (payload) => onSuccessCallback(payload)
});

export const logoutUser = (params, onSuccessCallback) => ({
  type: loginActions.UNAUTH_USER,
});

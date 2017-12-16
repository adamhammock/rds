import * as registrationApi from '../../utils/api/registration';
import registerActions from '../constants/action-types/register';
import commonActions from '../constants/action-types/common';

export const registerAccount = (params, onSuccessCallback) => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: registerActions.REGISTER_ACCOUNT,
  promise: () => registrationApi.registerAccount(params),
  onSuccessCallback: (payload) => onSuccessCallback(payload)
});


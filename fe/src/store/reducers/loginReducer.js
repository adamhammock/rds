import { Map } from 'immutable';

import loginActions from '../constants/action-types/login';

// Define initial state
const initialState = Map({
  authenticationIsInProgress: false,
  authenticated: false,
  errors: Map({}),
  data: Map({}),
});

// Handle actions
export default function (state = initialState, action) {
  switch (action.type) {
    case loginActions.AUTH_USER.START:
      return { ...state, authenticationIsInProgress: true, authenticated: false, data: {}, errors: {} };

    case loginActions.AUTH_USER.SUCCESS:
      return { ...state, authenticationIsInProgress: false, authenticated: true, data: action.payload, errors: {} };

    case loginActions.AUTH_USER.FAIL:
      return { ...state, authenticationIsInProgress: false, authenticated: true, data: {}, errors: action.errors };

    case loginActions.UNAUTH_USER:
      return { ...state, authenticationIsInProgress: false, authenticated: false, data: {}, errors: {} };

    default:
      return state;
  }
}

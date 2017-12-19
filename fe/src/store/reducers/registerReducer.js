import { Map } from 'immutable';

import registerActions from '../constants/action-types/register';

// Define initial state
const initialState = Map({
  authenticated: false,
  errors: Map({}),
  data: Map({}),
});

// Handle actions
export default function (state = initialState, action) {
  switch (action.type) {
    case registerActions.REGISTER_ACCOUNT.START:
      return { ...state, data: {}, errors: {} };

    case registerActions.REGISTER_ACCOUNT.SUCCESS:
      return { ...state, authenticationIsInProgress: false, authenticated: true, data: action.payload, errors: {} };

    case registerActions.REGISTER_ACCOUNT.FAIL:
      return { ...state, data: {}, errors: action.errors };

    default:
      return state;
  }
}

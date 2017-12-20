import { Map } from 'immutable';

import socketActions from '../constants/action-types/socket';


// Define initial state
const initialState = Map({
  yAxis: [],
  xAxis: []
});

// Handle actions
export default function (state = initialState, action) {
  switch (action.type) {
    case socketActions.CONNECT.START:
      return state;

    case socketActions.CONNECT.SUCCESS:
      return state;

    case socketActions.CONNECT.FAIL:
      return state;

    case socketActions.ON.START:
      return state;

    case socketActions.ON.SUCCESS:
      const { payload } = action;
      const yAxis = [...state.yAxis, payload[1]];
      const xAxis = [...state.xAxis, payload[0]];
      return { ...state, yAxis, xAxis };

    case socketActions.ON.FAIL:
      return state;

    case socketActions.DISCONNECT.START:
      return state;

    case socketActions.DISCONNECT.SUCCESS:
      return state;

    case socketActions.DISCONNECT.FAIL:
      return state;

    default:
      return state;
  }
}

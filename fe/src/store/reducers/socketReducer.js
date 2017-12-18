import { Map } from 'immutable';

import socketActions from '../constants/action-types/socket';


// Define initial state
const initialState = Map({
  config: {
    chart: {},
    title: {
      text: 'DFIT'
    },
    series: [{
      name: 'PSI',
      data: [[(new Date()).getTime(), 1]]
    }]
  }
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
      const series = state.config.series.map(serie => {
        const data = [...serie.data, payload];
        return { ...serie, data }
      });
      const config = { ...state.config, series };
      return { ...state, config };

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

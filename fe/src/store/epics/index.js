import { combineEpics } from 'redux-observable';
import handleApiCallEpic from './common';
import { socketConnectEpic, socketOnEpic } from './socket';

export const rootEpic = combineEpics(
  handleApiCallEpic,
  socketConnectEpic,
  socketOnEpic,
);

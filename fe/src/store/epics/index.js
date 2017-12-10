import { combineEpics } from 'redux-observable';
import handleApiCallEpic from './common';

export const rootEpic = combineEpics(
  handleApiCallEpic,
);

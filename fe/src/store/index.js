import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { loadState, saveState } from './localStorage';
import { rootEpic } from './epics';
import reducers from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(epicMiddleware)
);

store.subscribe(() => {
  saveState(store.getState());
})

export default store;

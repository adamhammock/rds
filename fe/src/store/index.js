import { createStore, applyMiddleware } from 'redux';
import { Observable } from 'rxjs/Observable';
import { createEpicMiddleware } from 'redux-observable';
import io from 'socket.io-client';
import { loadState, saveState } from './localStorage';
import { rootEpic } from './epics';
import reducers from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const persistedState = loadState();

const middleware = [epicMiddleware]

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(...middleware)
);

store.subscribe(() => saveState(store.getState()))

export default store;

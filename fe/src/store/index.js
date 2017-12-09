import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';
import { loadState, saveState } from './localStorage';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const allMiddlewares = [
  sagaMiddleware,
];
const persistedState = loadState();

// Create Redux store with all middlewares
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(...allMiddlewares),
);

store.subscribe(() => {
  saveState(store.getState());
})

// Run all sagas with saga middleware
sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;

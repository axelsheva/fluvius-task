import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';

const configureStore = (initialState, history) =>
  createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

export default configureStore;

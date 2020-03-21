import { persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducers(rootReducer), compose(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/rootReducer';
import sagas from '../redux/sagas/rootSaga';

// create the saga middleware
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
  devTools: __DEV__,
});

// run the saga
sagaMiddleware.run(sagas);

export default store;
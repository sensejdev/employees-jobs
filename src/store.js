import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import apiReducer from "modules/api/reducer";
import createSagaMiddlewarre from "redux-saga";
import apiSaga from "modules/api/saga";
import appReducer from "modules/app/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const reducers = combineReducers({
  api: apiReducer,
  app: appReducer,
});

const sagaMiddleware = createSagaMiddlewarre();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(apiSaga);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// // static import
import rootSaga from "./saga";
import { authReducer, cropsReducer } from "./reducer";

// setup saga middleware
const sagaMiddleware = createSagaMiddleware();

// create root reducer
const rootReducer = {
  auth: authReducer,
  crops: cropsReducer,
};

// setup store
const Store = configureStore({
  reducer: rootReducer,
  //   devTools: process.env.REACT_APP_ENV_STATUS !== "production",
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default Store;

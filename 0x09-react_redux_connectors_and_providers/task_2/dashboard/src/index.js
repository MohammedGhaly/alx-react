import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Map } from "immutable";
import { thunk } from "redux-thunk";
import { initialState, uiReducer } from "./reducers/uiReducer";
import App from "./App/App";
import { appContext } from "./App/AppContext";

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

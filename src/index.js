import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import AdminReducer from "./admin/redux/AdminReducer/AdminReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
 AdminReducer
})

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
//const store = createStore(userReducer,applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();

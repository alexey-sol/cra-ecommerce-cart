import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "components/App/App.component";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";

const wrappedApp = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(wrappedApp, document.getElementById("root"));

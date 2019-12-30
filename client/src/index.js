import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import App from "components/App/App.component";
import React from "react";
import ReactDOM from "react-dom";
import {persistor, store} from "./redux/store";

const wrappedApp = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(wrappedApp, document.getElementById("root"));

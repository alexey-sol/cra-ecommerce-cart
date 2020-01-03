import {ApolloClient} from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {BrowserRouter} from "react-router-dom";
import {InMemoryCache} from "apollo-cache-inmemory";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import App from "components/App/App.component";
import React from "react";
import ReactDOM from "react-dom";
import {createHttpLink} from "apollo-link-http";
import {persistor, store} from "./redux/store";
import {resolvers, typeDefs} from "graphql/resolvers";

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com/"
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: httpLink,
  resolvers,
  typeDefs
});

client.writeData({
  data: {
    cartIsShown: false,
    cartItems: [],
    itemCount: 0
  }
});

const wrappedApp = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(wrappedApp, document.getElementById("root"));

import {Query} from "react-apollo";
import Header from "./Header.component";
import React from "react";
import {gql} from "apollo-boost";

const GET_CART_IS_SHOWN = gql`{
  cartIsShown @client
}`;

function HeaderContainer () {
  return (
    <Query query={GET_CART_IS_SHOWN}>
      {
        ({data}) => <Header cartIsShown={data.cartIsShown} />
      }
    </Query>
  );
}

export default HeaderContainer;

import {Query, Mutation} from "react-apollo";
import CartDropdown from "./CartDropdown.component";
import React from "react";
import {gql} from "apollo-boost";

const GET_CART_ITEMS = gql`{
  cartItems @client
}`;

const TOGGLE_CART_IS_SHOWN = gql`
  mutation ToggleCartShown {
    toggleCartShown @client
  }
`;

function CartDropdownContainer () {
  return (
    <Mutation mutation={TOGGLE_CART_IS_SHOWN}>
      {
        (toggleCartShown) => (
          <Query query={GET_CART_ITEMS}>
            {
              ({data}) => (
                <CartDropdown
                  cartItems={data.cartItems}
                  toggleCartShown={toggleCartShown}
                />
              )
            }

          </Query>
        )
      }
    </Mutation>
  );
}

export default CartDropdownContainer;

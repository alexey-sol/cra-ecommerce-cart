import {Query, Mutation} from "react-apollo";
import CartIcon from "./CartIcon.component";
import React from "react";
import {gql} from "apollo-boost";

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const TOGGLE_CART_IS_SHOWN = gql`
  mutation ToggleCartShown {
    toggleCartShown @client
  }
`;

function CartIconContainer () {
  return (
    <Query query={GET_ITEM_COUNT}>
      {
        ({data}) => (
          <Mutation mutation={TOGGLE_CART_IS_SHOWN}>
            {
              (toggleCartShown) => (
                <CartIcon
                  itemCount={data.itemCount}
                  toggleCartShown={toggleCartShown}
                />
              )
            }
          </Mutation>
        )
      }
    </Query>
  );
}

export default CartIconContainer;

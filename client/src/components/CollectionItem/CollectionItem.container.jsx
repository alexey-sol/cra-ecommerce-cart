import {Mutation} from "react-apollo";
import CollectionItem from "./CollectionItem.component";
import React from "react";
import {gql} from "apollo-boost";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

function CollectionItemContainer (props) {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {
        (addItemToCart) => {
          const addItem = (item) => addItemToCart({
            variables: {item}
          });

          return (
            <CollectionItem
              {...props}
              addItemToCart={addItem}
            />
          );
        }
      }
    </Mutation>
  );
}

export default CollectionItemContainer;

import {addItemToCart, getCartItemCount} from "redux/cart/cart.utils";
import {gql} from "apollo-boost";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    AddItemToCart(item: Item!): [Item]!
    ToggleCartShown: Boolean!
  }
`;

const GET_CART_IS_SHOWN = gql`
  {
    cartIsShown @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

export const resolvers = {
  Mutation: {
    addItemToCart: (root, args, context) => {
      const {item} = args;
      const {cache} = context;

      const {cartItems} = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = addItemToCart(cartItems, item);

      const getItemCountData = {
        itemCount: getCartItemCount(newCartItems)
      };

      cache.writeQuery({
        data: getItemCountData,
        query: GET_ITEM_COUNT
      });

      const getCartItemsData = {
        cartItems: newCartItems
      };

      cache.writeQuery({
        data: getCartItemsData,
        query: GET_CART_ITEMS
      });

      return newCartItems;
    },

    toggleCartShown: (root, args, context) => {
      const {cache} = context;

      const {cartIsShown} = cache.readQuery({
        query: GET_CART_IS_SHOWN
      });

      const data = {
        cartIsShown: !cartIsShown
      };

      cache.writeQuery({
        data,
        query: GET_CART_IS_SHOWN
      });

      return !cartIsShown;
    }
  }
};

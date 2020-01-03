function addItemToCart (cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      const addedCartItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1
      };

      return (cartItem.id === cartItemToAdd.id)
        ? addedCartItem
        : cartItem;
    });
  }

  const newCartItem = {
    ...cartItemToAdd,
    quantity: 1
  };

  return [
    ...cartItems,
    newCartItem
  ];
};

function getCartItemCount (cartItems) {
  return cartItems.reduce((overallQuantity, cartItem) => {
    return overallQuantity + cartItem.quantity;
  }, 0);
}

function groupCartItems (cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === cartItemToAdd.id;
  });

  let nextCartItems;

  if (existingCartItem) {
    nextCartItems = cartItems.map(cartItem => {
      const nextCartItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1
      };

      return (cartItem.id === cartItemToAdd.id)
        ? nextCartItem
        : cartItem;
    });
  } else {
    const nextCartItem = {
      ...cartItemToAdd,
      quantity: 1
    };

    nextCartItems = [...cartItems, nextCartItem];
  }

  return nextCartItems;
}

function removeItemFromCart (cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map(cartItem => {
      const newCartItem = {
        ...cartItem,
        quantity: cartItem.quantity - 1
      };

      return (cartItem.id === cartItemToRemove.id) ? newCartItem : cartItem;
    });
  }
}

export {
  addItemToCart,
  getCartItemCount,
  groupCartItems,
  removeItemFromCart
};

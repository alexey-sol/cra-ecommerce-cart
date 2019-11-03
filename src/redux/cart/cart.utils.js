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

export {
  groupCartItems
};

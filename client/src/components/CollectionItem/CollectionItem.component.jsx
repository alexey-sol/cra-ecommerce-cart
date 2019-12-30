import CustomButton from "components/CustomButton";
import React from "react";
import {addItemToCart} from "redux/cart/cart.actions";
import {connect} from "react-redux";
import {defaultProps, propTypes} from "./CollectionItem.validation";
import styles from "./CollectionItem.module.scss";

CollectionItem.defaultProps = defaultProps;
CollectionItem.propTypes = propTypes;

function CollectionItem ({addItemToCart, item}) {
  const {imageUrl, name, price} = item;

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <li className={styles.container}>
      <div
        className={styles.image}
        style={backgroundImageStyle}
      />

      <div className={styles.collectionFooter}>
        <span className={styles.name}>
          {name}
        </span>

        <span className={styles.price}>
          {price}
        </span>
      </div>

      <CustomButton
        className={styles.addToCartButton}
        isInverted
        onClick={() => addItemToCart(item)}
      >
        Add to cart
      </CustomButton>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item))
});

const ConnectedCollectionItem = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default ConnectedCollectionItem;

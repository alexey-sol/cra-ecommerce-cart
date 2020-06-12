import React, { useCallback } from "react";
import { connect } from "react-redux";

import BaseButton from "components/BaseButton";
import { addItemToCart } from "redux/cart/cart.actions";
import { defaultProps, propTypes } from "./CollectionItem.props";
import styles from "./CollectionItem.module.scss";

CollectionItem.defaultProps = defaultProps;
CollectionItem.propTypes = propTypes;

function CollectionItem ({ onAddItemToCart, item }) {
    const {
        imageUrl,
        name,
        price
    } = item;

    const backgroundImageStyle = {
        backgroundImage: `url(${imageUrl})`
    };

    const handleClick = useCallback(() => onAddItemToCart(item), [item, onAddItemToCart]);

    return (
        <li className={styles.container}>
            <section
                className={styles.image}
                style={backgroundImageStyle}
            />

            <section className={styles.collectionFooter}>
                <span className={styles.name}>
                    {name}
                </span>

                <span className={styles.price}>
                    {price}
                </span>
            </section>

            <BaseButton
                className={styles.addToCartButton}
                isInverted
                onClick={handleClick}
            >
                Add to cart
            </BaseButton>
        </li>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onAddItemToCart: (item) => dispatch(addItemToCart(item))
});

const ConnectedCollectionItem = connect(
    null,
    mapDispatchToProps
)(CollectionItem);

export default ConnectedCollectionItem;

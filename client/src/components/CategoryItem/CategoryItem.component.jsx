import React, { useCallback } from "react";
import { connect } from "react-redux";

import BaseButton from "components/BaseButton";
import { addItemToCart } from "redux/cart/cart.actions";
import { defaultProps, propTypes } from "./CategoryItem.props";
import styles from "./CategoryItem.module.scss";

CategoryItem.defaultProps = defaultProps;
CategoryItem.propTypes = propTypes;

function CategoryItem ({ item, onAddItemToCart }) {
    const {
        album,
        artist,
        imageUrl,
        price,
        year
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
            >
                <BaseButton
                    className={styles.addToCartButton}
                    isInverted
                    onClick={handleClick}
                >
                    Add to cart
                </BaseButton>
            </section>

            <section className={styles.imageFooter}>
                <div className={styles.artist}>
                    {artist}
                </div>

                <div className={styles.album}>
                    {`${album} (${year})`}
                </div>

                <span className={styles.price}>
                    {`$${price}`}
                </span>
            </section>
        </li>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onAddItemToCart: (item) => dispatch(addItemToCart(item))
});

const ConnectedCategoryItem = connect(
    null,
    mapDispatchToProps
)(CategoryItem);

export default ConnectedCategoryItem;

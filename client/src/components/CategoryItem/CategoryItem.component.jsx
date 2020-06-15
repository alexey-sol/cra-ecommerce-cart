import React, { useCallback } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import BaseButton from "components/BaseButton";
import { addItemToCart } from "redux/cart/cart.actions";
import { defaultProps, propTypes } from "./CategoryItem.props";
import styles from "./CategoryItem.module.scss";

CategoryItem.defaultProps = defaultProps;
CategoryItem.propTypes = propTypes;

function CategoryItem ({
    isAscending,
    item,
    onAddItemToCart,
    setSorting
}) {
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
    const sortingIsOn = Boolean(setSorting);

    const orderToChoose = (isAscending)
        ? "descending"
        : "ascending";

    const artistFieldClassName = classnames(
        styles.artist,
        (sortingIsOn) ? styles.sortingIsOn : ""
    );

    const albumFieldClassName = classnames(
        styles.album,
        (sortingIsOn) ? styles.sortingIsOn : ""
    );

    const priceFieldClassName = classnames(
        styles.price,
        (sortingIsOn) ? styles.sortingIsOn : ""
    );

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
                <div
                    className={artistFieldClassName}
                    onClick={sortingIsOn ? () => setSorting("artist") : null}
                    title={sortingIsOn ? getFieldTitle("artist", orderToChoose) : ""}
                >
                    {artist}
                </div>

                <div
                    className={albumFieldClassName}
                    onClick={sortingIsOn ? () => setSorting("album") : null}
                    title={sortingIsOn ? getFieldTitle("album", orderToChoose) : ""}
                >
                    {`${album} (${year})`}
                </div>

                <span
                    className={priceFieldClassName}
                    onClick={sortingIsOn ? () => setSorting("price") : null}
                    title={sortingIsOn ? getFieldTitle("price", orderToChoose) : ""}
                >
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

function getFieldTitle (field, sortingOrder) {
    return `Sort by ${field} (${sortingOrder})`;
}

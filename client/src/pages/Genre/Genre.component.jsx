import React from "react";
import { connect } from "react-redux";

import GenreItem from "components/GenreItem";
import { defaultProps, propTypes } from "./Genre.component.props";
import { selectGenre } from "redux/shop/shop.selectors";
import styles from "./Genre.module.scss";

GenrePage.defaultProps = defaultProps;
GenrePage.propTypes = propTypes;

function GenrePage ({ genre }) {
    const { title, items = [] } = genre;

    const itemElements = items.map(item => (
        <GenreItem
            item={item}
            key={item.id}
        />
    ));

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                {title}
            </header>

            <section className={styles.items}>
                {itemElements}
            </section>
        </section>
    );
}

function mapStateToProps (state, ownProps) {
    const { genreId } = ownProps.match.params || {};

    return {
        genre: selectGenre(genreId)(state)
    };
}

export default connect(mapStateToProps)(GenrePage);

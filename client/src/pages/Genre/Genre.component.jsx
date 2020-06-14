import React from "react";

import GenreItem from "components/GenreItem";
import { defaultProps, propTypes } from "./Genre.component.props";
import styles from "./Genre.module.scss";

Genre.defaultProps = defaultProps;
Genre.propTypes = propTypes;

function Genre ({ genre }) {
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

export default Genre;

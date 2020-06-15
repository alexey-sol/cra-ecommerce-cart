import React from "react";

import CategoryItem from "components/CategoryItem";
import { defaultProps, propTypes } from "./Category.component.props";
import styles from "./Category.module.scss";

Category.defaultProps = defaultProps;
Category.propTypes = propTypes;

function Category ({ category }) {
    const { title, items = [] } = category;

    const itemElements = items.map(item => (
        <CategoryItem
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

export default Category;

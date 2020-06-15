import React, { useState } from "react";

import CategoryItem from "components/CategoryItem";
import { defaultProps, propTypes } from "./Category.component.props";
import styles from "./Category.module.scss";

Category.defaultProps = defaultProps;
Category.propTypes = propTypes;

function Category ({ category, onSortItems }) {
    const { title, items = [] } = category;

    const [sortingOptions, setSortingOptions] = useState({
        category: title.toLowerCase(),
        isAscending: true,
        field: "artist"
    });

    const setSorting = (field) => {
        const newOptions = {
            ...sortingOptions,
            field,
            isAscending: !sortingOptions.isAscending
        };

        setSortingOptions(newOptions);
        onSortItems(newOptions);
    };

    const itemElements = items.map(item => (
        <CategoryItem
            isAscending={sortingOptions.isAscending}
            item={item}
            key={item.id}
            setSorting={setSorting}
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

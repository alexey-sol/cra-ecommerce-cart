import React from "react";

import CategoryItem from "components/CategoryItem";
import CustomLink from "components/CustomLink";
import { defaultProps, propTypes } from "./CategoryPreview.props";
import styles from "./CategoryPreview.module.scss";

CategoryPreview.defaultProps = defaultProps;
CategoryPreview.propTypes = propTypes;

function CategoryPreview ({ items, title }) {
    const filteredItemElements = items
        .filter((item, index) => index < 3)
        .map(item => (
            <CategoryItem
                item={item}
                key={item.id}
            />
        ));

    const categoryPath = `shop/${title.toLowerCase()}`;
    const titleTooltipText = `Show all ${title}`;

    return (
        <li className={styles.container}>
            <header className={styles.title}>
                <CustomLink
                    className={styles.link}
                    title={titleTooltipText}
                    to={categoryPath}
                >
                    {title.toUpperCase()}
                </CustomLink>
            </header>

            <ul className={styles.preview}>
                {filteredItemElements}
            </ul>
        </li>
    );
}

export default CategoryPreview;

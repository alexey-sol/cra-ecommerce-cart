import React from "react";

import CollectionItem from "components/CollectionItem";
import { defaultProps, propTypes } from "./CollectionPreview.props";
import styles from "./CollectionPreview.module.scss";

CollectionPreview.defaultProps = defaultProps;
CollectionPreview.propTypes = propTypes;

function CollectionPreview ({ items, title }) {
    const filteredItemElements = items
        .filter((item, index) => index < 4)
        .map(item => (
            <CollectionItem
                item={item}
                key={item.id}
            />
        ));

    return (
        <li className={styles.container}>
            <h1 className={styles.title}>
                {title.toUpperCase()}
            </h1>

            <ul className={styles.preview}>
                {filteredItemElements}
            </ul>
        </li>
    );
}

export default CollectionPreview;

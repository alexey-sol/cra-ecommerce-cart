import React from "react";

import CustomLink from "components/CustomLink";
import GenreItem from "components/GenreItem";
import { defaultProps, propTypes } from "./GenrePreview.props";
import styles from "./GenrePreview.module.scss";

GenrePreview.defaultProps = defaultProps;
GenrePreview.propTypes = propTypes;

function GenrePreview ({ items, title }) {
    const filteredItemElements = items
        .filter((item, index) => index < 4)
        .map(item => (
            <GenreItem
                item={item}
                key={item.id}
            />
        ));

    const genrePath = `shop/${title.toLowerCase()}`;

    return (
        <li className={styles.container}>
            <header className={styles.title}>
                <CustomLink
                    className={styles.link}
                    title="Show all"
                    to={genrePath}
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

export default GenrePreview;

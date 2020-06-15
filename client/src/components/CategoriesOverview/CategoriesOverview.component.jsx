import React from "react";

import CategoryPreview from "components/CategoryPreview";
import { defaultProps, propTypes } from "./CategoriesOverview.component.props";
import styles from "./CategoriesOverview.module.scss";

CategoriesOverview.defaultProps = defaultProps;
CategoriesOverview.propTypes = propTypes;

function CategoriesOverview ({ categories }) {
    const categoryElements = categories.map(({ id, ...rest }) => (
        <CategoryPreview
            key={id}
            {...rest}
        />
    ));

    return (
        <section className={styles.container}>
            {categoryElements}
        </section>
    );
}

export default CategoriesOverview;

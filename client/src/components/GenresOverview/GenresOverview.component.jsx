import React from "react";

import GenrePreview from "components/GenrePreview";
import { defaultProps, propTypes } from "./GenresOverview.component.props";
import styles from "./GenresOverview.module.scss";

GenresOverview.defaultProps = defaultProps;
GenresOverview.propTypes = propTypes;

function GenresOverview ({ genres }) {
    const genreElements = genres.map(({ id, ...rest }) => (
        <GenrePreview
            key={id}
            {...rest}
        />
    ));

    return (
        <section className={styles.container}>
            {genreElements}
        </section>
    );
}

export default GenresOverview;

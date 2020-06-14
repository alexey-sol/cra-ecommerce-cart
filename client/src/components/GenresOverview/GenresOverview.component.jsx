import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GenrePreview from "components/GenrePreview";
import { defaultProps, propTypes } from "./GenresOverview.props";
import { selectGenresForPreview } from "redux/shop/shop.selectors";
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

const mapStateToProps = createStructuredSelector({
    genres: selectGenresForPreview
});

export default connect(mapStateToProps)(GenresOverview);

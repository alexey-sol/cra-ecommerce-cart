import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GenresOverview from "./GenresOverview.component";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./GenresOverview.container.props";
import { selectGenresForPreview, selectIsGenreFetching } from "redux/shop/shop.selectors";

GenresOverviewContainer.defaultProps = defaultProps;
GenresOverviewContainer.propTypes = propTypes;

function GenresOverviewContainer ({ genres }) {
    return (
        <GenresOverview genres={genres} />
    );
}

const mapStateToProps = createStructuredSelector({
    genres: selectGenresForPreview,
    isFetching: selectIsGenreFetching
});

const ConnectedGenresOverview = compose(
    connect(mapStateToProps),
    WithSpinner
)(GenresOverviewContainer);

export default ConnectedGenresOverview;

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Genre from "./Genre.component";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./Genre.container.props";
import { selectGenre, selectIsGenresFetched } from "redux/shop/shop.selectors";

GenreContainer.defaultProps = defaultProps;
GenreContainer.propTypes = propTypes;

function GenreContainer ({ genre }) {
    return (
        <Genre genre={genre} />
    );
}

function mapStateToProps (state, ownProps) {
    const { genreId } = ownProps.match.params || {};

    return {
        genre: selectGenre(genreId)(state),
        isFetching: !selectIsGenresFetched
    };
}

const ConnectedPage = compose(
    connect(mapStateToProps),
    WithSpinner
)(GenreContainer);

export default ConnectedPage;

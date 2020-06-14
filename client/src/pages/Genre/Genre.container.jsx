import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsGenresFetched } from "redux/shop/shop.selectors";
import GenrePage from "./Genre.component";
import WithSpinner from "components/WithSpinner";

const mapStateToProps = createStructuredSelector({
    isFetching: (newState) => !selectIsGenresFetched(newState)
});

const GenrePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(GenrePage);

export default GenrePageContainer;

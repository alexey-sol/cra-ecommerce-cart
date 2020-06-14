import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GenresOverviewComponent from "./GenresOverview.component";
import WithSpinner from "components/WithSpinner";
import { selectIsGenreFetching } from "redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsGenreFetching
});

const ConnectedGenresOverview = compose(
    connect(mapStateToProps),
    WithSpinner
)(GenresOverviewComponent);

export default ConnectedGenresOverview;

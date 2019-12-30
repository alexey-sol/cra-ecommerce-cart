import {compose} from "redux";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "redux/shop/shop.selectors";
import CollectionsOverview from "./CollectionsOverview.component";
import WithSpinner from "components/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

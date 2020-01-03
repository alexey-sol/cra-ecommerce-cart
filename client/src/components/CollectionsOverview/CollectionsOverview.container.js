import {Query} from "react-apollo";
import CollectionsOverview from "./CollectionsOverview.component";
import React from "react";
import Spinner from "components/Spinner";
import {gql} from "apollo-boost";

const GET_COLLECTIONS = gql`{
  collections {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}`;

function CollectionsOverviewContainer () {
  return (
    <Query query={GET_COLLECTIONS}>
      {
        ({data, error, loading}) => (loading)
          ? <Spinner />
          : <CollectionsOverview collections={data.collections} />
      }
    </Query>
  );
}

export default CollectionsOverviewContainer;

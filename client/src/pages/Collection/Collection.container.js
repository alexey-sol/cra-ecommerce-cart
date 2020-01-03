import {Query} from "react-apollo";
import Collection from "./Collection.component";
import React from "react";
import Spinner from "components/Spinner";
import {gql} from "apollo-boost";
import {propTypes} from "./Collection.container.validation";

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

CollectionContainer.propTypes = propTypes;

function CollectionContainer ({match}) {
  const {collectionId} = match.params;
  const variables = {
    title: collectionId
  };

  return (
    <Query
      query={GET_COLLECTIONS_BY_TITLE}
      variables={variables}
    >
      {
        ({data, loading}) => {
          const {getCollectionsByTitle} = data;

          return (loading)
            ? <Spinner />
            : <Collection collection={getCollectionsByTitle} />;
        }
      }
    </Query>
  );
}

export default CollectionContainer;

import {createSelector} from "reselect";

function selectDirectory ({directory}) {
  return directory;
}

export const selectDirectorySections = createSelector(
  [selectDirectory],
  ({sections}) => sections
);

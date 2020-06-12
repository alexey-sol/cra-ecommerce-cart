import { createSelector } from "reselect";

function selectAuth ({ auth }) {
    return auth;
}

export const selectUser = createSelector(
    [selectAuth],
    ({ user }) => user
);

export default selectUser;
